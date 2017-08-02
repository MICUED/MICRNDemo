/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>
#import <BugsnagReactNative/BugsnagReactNative.h>
#import "RCTBaiduMapViewManager.h"
#import "MICGetBundle.h"
#import "MICShouldUpdate.h"
#import "MICDownLoad.h"
#import "SSZipArchive.h"

@interface AppDelegate()
@property (nonatomic,strong) RCTBridge *bridge;
@end

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  [BugsnagReactNative start];
  NSURL *jsCodeLocation;
  //  从获取自定义jsbundle
  jsCodeLocation = [MICGetBundle getBundle];
  [RCTBaiduMapViewManager initSDK:@"geyeVHGlgl88pizCjQRZAvH0jftQHqwk"];//百度api key


  _bridge = [[RCTBridge alloc] initWithBundleURL:jsCodeLocation
                                  moduleProvider:nil
                                   launchOptions:launchOptions];
  RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:_bridge moduleName:@"MICRNDemo" initialProperties:nil];
//  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index.ios" fallbackResource:nil];
//
//  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
//                                                      moduleName:@"MICRNDemo"
//                                               initialProperties:nil
//                                                   launchOptions:launchOptions];
  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
  return YES;
}
-(void)applicationDidBecomeActive:(UIApplication *)application {
  [MICShouldUpdate shouldUpdate:^(NSInteger status, id datas) {
    if(status == 1){
      NSLog(@"==================1");
      [[MICDownLoad download] downloadFileWithURLString:datas[@"zip"] callback:^(NSInteger status, id data) {
        NSLog(@"==================2");
        if(status == 1){
          NSError *error;
          NSString *filePath = (NSString *)data;
          NSString *desPath = [NSString stringWithFormat:@"%@",NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES)[0]];
          NSLog(@"==================3");
          [SSZipArchive unzipFileAtPath:filePath toDestination:desPath overwrite:YES password:nil error:&error];
          if(!error){
            NSLog(@"==================4");
            NSString *filePath = [[NSBundle mainBundle] pathForResource:@"Version" ofType:@"plist"];
            NSMutableDictionary *newsDict = [NSMutableDictionary dictionary];
            [newsDict setObject:datas[@"version"] forKey:@"version"];
            [newsDict writeToFile:filePath atomically:YES];
            NSLog(@"解压成功");
            //            如果是立马更新则打开下面代码
            //            [_bridge reload];
          }else{
            NSLog(@"解压失败");
          }
        }
      }];
    }
  }];
  
}


@end
