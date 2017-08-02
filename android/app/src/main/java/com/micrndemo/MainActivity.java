package com.micrndemo;

import com.facebook.react.ReactActivity;
import com.bugsnag.BugsnagReactNative;
import com.micrndemo.hotDeploy.FileConstant;
import com.micrndemo.utils.FileUtils;
import com.micrndemo.utils.HttpClient;
import com.micrndemo.utils.IOUtil;

import android.app.DownloadManager;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.net.Uri;
import android.os.Bundle;
import android.widget.Toast;

import org.json.JSONException;
import org.json.JSONObject;

import java.io.File;

import javax.annotation.Nullable;

public class MainActivity extends ReactActivity {
    private String remoteVersion;
    private String localVersion;
    private static File zipfile;
    private static Long mDownLoadId;
    private static final String TAG = "HOT_UPLOAD";
    private CompleteReceiver localReceiver;

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "MICRNDemo";
    }
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        BugsnagReactNative.start(this);
        registeReceiver();
    }

    private void registeReceiver() {
        CompleteReceiver localReceiver = new CompleteReceiver();
        registerReceiver(localReceiver, new IntentFilter(DownloadManager.ACTION_DOWNLOAD_COMPLETE));
    }

    public void checkVersion() {
        new Thread(new Runnable() {
            @Override
            public void run() {
                // TODO: http request.
                try {
                    JSONObject ob = HttpClient.get(FileConstant.JS_BUNDLE_REMOTE_URL);
                    remoteVersion = ob.getString("version");
                    String zipUrl = ob.getString("zip");
                    localVersion = IOUtil.getCurrVersion();
                    if (!remoteVersion.equals(localVersion)) {
                        downLoadBundle(zipUrl);
                    }
                } catch (JSONException e) {
                    e.printStackTrace();
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        }).start();
    }

    public void downLoadBundle(String remotePath) {
        // 1.检查是否存在pat压缩包,存在则删除
        FileUtils.isFolderExists(FileConstant.JS_PATCH_LOCAL_FOLDER);

        zipfile = new File(FileConstant.JS_PATCH_LOCAL_PATH);

        if (zipfile != null && zipfile.exists()) {
            zipfile.delete();
        }
        // 2.下载
        DownloadManager downloadManager = (DownloadManager) getSystemService(Context.DOWNLOAD_SERVICE);
        DownloadManager.Request request = new DownloadManager
                .Request(Uri.parse(remotePath));
        request.setNotificationVisibility(DownloadManager.Request.VISIBILITY_HIDDEN);
        request.setAllowedNetworkTypes(DownloadManager.Request.NETWORK_MOBILE | DownloadManager.Request.NETWORK_WIFI);
        request.setDestinationUri(Uri.parse("file://" + FileConstant.JS_PATCH_LOCAL_PATH));
        mDownLoadId = downloadManager.enqueue(request);
    }

    public class CompleteReceiver extends BroadcastReceiver {
        @Override
        public void onReceive(Context context, Intent intent) {
            long completeId = intent.getLongExtra(DownloadManager.EXTRA_DOWNLOAD_ID, -1);
            if (completeId == mDownLoadId) {
                Toast.makeText(MainActivity.this, "发现新版本，本地版本：" + localVersion + "，新版本：" + remoteVersion, Toast.LENGTH_SHORT).show();
                // 1.解压
                FileUtils.decompression();
                zipfile.delete();
                IOUtil.writeVersion(remoteVersion);
                Toast.makeText(MainActivity.this, "安装完成，重启生效", Toast.LENGTH_SHORT).show();
//                startActivity(new Intent(MainActivity.this, ReactNewActivity.class));
            }
        }
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        unregisterReceiver(localReceiver);
    }
}
