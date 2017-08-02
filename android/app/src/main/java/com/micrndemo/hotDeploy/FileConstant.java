package com.micrndemo.hotDeploy;

import android.os.Environment;

import com.micrndemo.MainApplication;

import java.io.File;

/**
 * Created by shuxun on 2017/8/1.
 */

public class FileConstant {
    public static final String FIRST_VERSION = "0.0.0";

    /**
     * zip的文件名
     */
    public static final String ZIP_NAME = "micendemo";

    /**
     * bundle文件名
     */
    public static final String JS_BUNDLE_LOCAL_FILE = "index.android.bundle";

    public static final String VERSION_FILE = "version.txt";
    /**
     * 第一次解压zip后的文件目录
     */
    public static final String JS_PATCH_LOCAL_FOLDER = Environment.getExternalStorageDirectory().toString()
            + File.separator + MainApplication.getInstance().getAppPackageName();

    //version文件路径
    public static final String VERSION_FILE_LOCAL_PATH = JS_PATCH_LOCAL_FOLDER + "/" + VERSION_FILE;

    /**
     * 除第一次外，未来解压zip后的文件目录
     */
    public static final String FUTURE_JS_PATCH_LOCAL_FOLDER = JS_PATCH_LOCAL_FOLDER+"/future";

    /**
     * zip文件
     */
    public static final String JS_PATCH_LOCAL_PATH = JS_PATCH_LOCAL_FOLDER + File.separator + ZIP_NAME + "_CACHE" + ".zip";

    /**
     * 解压后的bundle文件保存路径
     */
    public static final String JS_BUNDLE_LOCAL_PATH = JS_PATCH_LOCAL_FOLDER +"/future/" + JS_BUNDLE_LOCAL_FILE;


    /**
     * 下载URL
     */
    public static final String JS_BUNDLE_REMOTE_URL = "http://10.100.161.60:9000/version";
}
