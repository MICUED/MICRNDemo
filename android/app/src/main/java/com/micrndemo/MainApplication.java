package com.micrndemo;

import android.app.Activity;
import android.app.Application;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.widget.Toast;

import com.facebook.react.ReactApplication;
import org.lovebing.reactnative.baidumap.BaiduMapPackage;
import com.bugsnag.BugsnagReactNative;
import com.RNFetchBlob.RNFetchBlobPackage;
import com.lwansbrough.RCTCamera.RCTCameraPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.micrndemo.hotDeploy.FileConstant;

import org.lovebing.reactnative.baidumap.BaiduMapPackage; //添加

import java.io.File;
import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {
    private static MainApplication applicationContext;


    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
            return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
            return Arrays.<ReactPackage>asList(
                    new MainReactPackage(),
            new BaiduMapPackage(),
            BugsnagReactNative.getPackage(),
                    new RNFetchBlobPackage(),
                    new RCTCameraPackage(),
                    new BaiduMapPackage(getApplicationContext())
            );
        }

        @Nullable
        @Override
        protected String getJSBundleFile() {
            File file = new File (FileConstant.JS_BUNDLE_LOCAL_PATH);
            if(file != null && file.exists()) {
                return FileConstant.JS_BUNDLE_LOCAL_PATH;
            } else {
                return super.getJSBundleFile();
            }
        }
    };

    @Override
    public ReactNativeHost getReactNativeHost() {
        return mReactNativeHost;
    }

    @Override
    public void onCreate() {
        super.onCreate();
        applicationContext = (MainApplication) getApplicationContext();
        SoLoader.init(this, /* native exopackage */ false);
        this.registerActivityLifecycleCallbacks(new ActivityLifecycleCallbacks() {
            @Override
            public void onActivityCreated(Activity activity, Bundle bundle) {

            }

            @Override
            public void onActivityStarted(Activity activity) {
                if(activity instanceof MainActivity){
//                    Toast.makeText(activity, "开始检查", Toast.LENGTH_SHORT).show();
                    ((MainActivity) activity).checkVersion();
                }
            }

            @Override
            public void onActivityResumed(Activity activity) {

            }

            @Override
            public void onActivityPaused(Activity activity) {

            }

            @Override
            public void onActivityStopped(Activity activity) {

            }

            @Override
            public void onActivitySaveInstanceState(Activity activity, Bundle bundle) {

            }

            @Override
            public void onActivityDestroyed(Activity activity) {

            }
        });
    }

    public static MainApplication getInstance() {
        return applicationContext;
    }

    public String getAppPackageName() {
        return this.getPackageName();
    }
}
