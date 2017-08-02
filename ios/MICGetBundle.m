//
//  MICGetBundle.m
//  hot
//
//  Created by necfol on 2017/7/31.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "MICGetBundle.h"

@implementation MICGetBundle

+(NSURL *)getBundle {
  /** 每次打包之后，每一个应用程序生成一个私有目录随即生成一个数字字母串作为目录名，在每一次应用程序启动时，这个字母数字串都是不同于上一次。Documents目录可以通过：NSSearchPathForDirectoriesInDomains(NSDocumentDirectory,NSUserdomainMask，YES) 得到*/
  NSString *jsCodeLocation = [NSString stringWithFormat:@"%@/\%@",NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES)[0],@"main.jsbundle"];
  BOOL jsExist = [[NSFileManager defaultManager] fileExistsAtPath:jsCodeLocation];
  if(jsExist)
    return [NSURL URLWithString:jsCodeLocation];
  NSString *jsBundlePath = [[NSBundle mainBundle] pathForResource:@"main" ofType:@"jsbundle"];
  [[NSFileManager defaultManager] copyItemAtPath:jsBundlePath toPath:jsCodeLocation error:nil];
  return [NSURL URLWithString:jsCodeLocation];
}
@end
