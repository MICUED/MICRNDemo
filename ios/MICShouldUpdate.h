//
//  MICShouldUpdate.h
//  hot
//
//  Created by necfol on 2017/7/31.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>

typedef void(^CallbackBlock) (NSInteger status,id data);

@interface MICShouldUpdate : NSObject

+(void)shouldUpdate:(CallbackBlock)callback;
@end
