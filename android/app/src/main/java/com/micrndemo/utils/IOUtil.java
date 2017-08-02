package com.micrndemo.utils;

import com.micrndemo.hotDeploy.FileConstant;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;

/**
 * Created by shuxun on 2017/8/1.
 */

public class IOUtil {
    public static String inputStream2String(InputStream is) {
        BufferedReader in = new BufferedReader(new InputStreamReader(is));
        StringBuffer buffer = new StringBuffer();
        String line = "";
        try {
            while ((line = in.readLine()) != null) {
                buffer.append(line);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return buffer.toString();
    }

    public static void writeVersion(String currVer) {
        File verFile = new File(FileConstant.VERSION_FILE_LOCAL_PATH);
        if (!verFile.exists()) {
            try {
                verFile.createNewFile();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        try {
            OutputStreamWriter osw = new OutputStreamWriter(new FileOutputStream(verFile));
            osw.write(currVer, 0, currVer.length());
            osw.close();
        } catch (IOException e) {
            e.printStackTrace();
        }

    }

    public static String getCurrVersion() {
        File verFile = new File(FileConstant.VERSION_FILE_LOCAL_PATH);
        if (verFile.exists()) {
            try {
                return inputStream2String(new FileInputStream(verFile));
            } catch (FileNotFoundException e) {
                e.printStackTrace();
                return FileConstant.FIRST_VERSION;
            }
        }
        return FileConstant.FIRST_VERSION;
    }

}
