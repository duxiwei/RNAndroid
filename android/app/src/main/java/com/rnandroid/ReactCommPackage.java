package com.rnandroid;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * Created by duxiwei on 18-8-19.
 * Mail  duxiwei@aliyun.com
 */
public class ReactCommPackage implements ReactPackage {

    public ReactCommModule reactCommModule;
    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        List<NativeModule> modules = new ArrayList<>();
        reactCommModule = new ReactCommModule(reactContext);
        modules.add(reactCommModule);
        return modules;
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }
}
