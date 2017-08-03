package com.micrndemo.utils;

import android.content.Context;

import com.micrndemo.hotDeploy.FileConstant;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.zip.ZipEntry;
import java.util.zip.ZipInputStream;

/**
 * Created by shuxun on 2017/8/1.
 */

public class FileUtils {
    //解压缩
    public static void decompression() {
        try {
            ZipInputStream inZip = new ZipInputStream(new FileInputStream(FileConstant.JS_PATCH_LOCAL_PATH));
            ZipEntry zipEntry;
            String szName;
            isFolderExists(FileConstant.FUTURE_JS_PATCH_LOCAL_FOLDER);
            try {
                while ((zipEntry = inZip.getNextEntry()) != null) {
                    szName = zipEntry.getName();
                    if (zipEntry.isDirectory()) {

                        szName = szName.substring(0, szName.length() - 1);
                        File folder = new File(FileConstant.FUTURE_JS_PATCH_LOCAL_FOLDER + File.separator + szName);
                        folder.mkdirs();

                    } else {

                        File file1 = new File(FileConstant.FUTURE_JS_PATCH_LOCAL_FOLDER + File.separator + szName);
                        boolean s = file1.createNewFile();
                        FileOutputStream fos = new FileOutputStream(file1);
                        int len;
                        byte[] buffer = new byte[1024];

                        while ((len = inZip.read(buffer)) != -1) {
                            fos.write(buffer, 0, len);
                            fos.flush();
                        }

                        fos.close();
                    }
                }

            } catch (IOException e) {
                e.printStackTrace();
            }
            inZip.close();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    /**
     * 获取Assets目录下的bundle文件
     *
     * @return
     */
    public static String getJsBundleFromAssets(Context context) {

        String result = "";
        try {
            InputStream is = context.getAssets().open(FileConstant.JS_BUNDLE_LOCAL_FILE);
            int size = is.available();
            byte[] buffer = new byte[size];
            is.read(buffer);
            is.close();
            result = new String(buffer, "UTF-8");

        } catch (IOException e) {
            e.printStackTrace();
        }
        return result;
    }

    /**
     * 遍历删除文件夹下所有文件
     *
     * @param filePath
     */
    public static void traversalFile(String filePath) {
        File file = new File(filePath);
        if (file.exists()) {
            File[] files = file.listFiles();
            for (File f : files) {
                if (f.isDirectory()) {
                    traversalFile(f.getAbsolutePath());
                } else {
                    f.delete();
                }
            }
            file.delete();
        }
    }

    /**
     * 删除指定File
     *
     * @param filePath
     */
    public static void deleteFile(String filePath) {
        File patFile = new File(filePath);
        if (patFile.exists()) {
            patFile.delete();
        }
    }

    /**
     * 检测文件夹是否存在，不存在则新建
     *
     * @param strFolder
     */
    public static boolean isFolderExists(String strFolder) {
        File file = new File(strFolder);
        if (!file.exists()) {
            if (file.mkdirs()) {
                return true;
            } else {
                return false;

            }
        }
        return true;
    }

}
