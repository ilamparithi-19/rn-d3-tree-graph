import React, { Component } from 'react';
import _ from 'lodash'
import { tx, ty, kx, ky } from './CoordinatePoints'
import Svg,{ G, Text, Rect, Circle, Defs, ClipPath, Image } from 'react-native-svg'

export function DeployNodes(nodes)
{
  const rectNodes =    _.map(nodes,function (n,index) {
                              let text, imageWidth, imageHeight;
                              imageWidth = n.nodeImageStyle ? n.nodeImageStyle.imageWidth : 50
                              imageHeight = n.nodeImageStyle ? n.nodeImageStyle.imageHeight : 50
                              if(n.name)
                              {
                                
                                text = <Text   
                                stroke="white"  textAnchor="middle" x={tx(n)} y={ty(n) + imageHeight} {...n.nodeTextStyle} >{ n.name }</Text>
                                 return (
                                  <Svg >
                                    <Defs>
                                      <ClipPath id="image-clip">
                                        <Circle cx="50%" cy="50%" r="40%" />
                                      </ClipPath>
                                    </Defs>
                                 <G key={'tree_' + index} >
                                   {/* <ClipPath id="image-clip">
                                    <Circle cx="50" cy="50" r="40" />
                                  </ClipPath> */}
                                          <Image
                                              x={kx(n)}
                                              y={ky(n)}
                                              width={imageWidth}
                                              height={imageHeight}
                                              {...n.nodeImageStyle}
                                              {...n.imageUrl}
                                              // clipPath="circle(50px at 0 100px)"
                                              // clipPath="url(#image-clip)"
                                          />
                                          {text}
                                      </G>
                                      </Svg>
                                      )
                              }
                            })
  return rectNodes
}
