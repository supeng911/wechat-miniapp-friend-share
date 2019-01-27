const videoCoverArr  = [
  {id: 111, path: 'com-speeder.oss-cn-hongkong.aliyuncs.com/tmp/video_1.png', style: null},
  {id: 112, path: 'com-speeder.oss-cn-hongkong.aliyuncs.com/tmp/video_2.png', style: null},
  {id: 113, path: 'com-speeder.oss-cn-hongkong.aliyuncs.com/tmp/video_3.png', style: null}
]


export function makeListData({offset =0, size= 5}) {
  return {
    hasNext: true,
    offset: offset+size,
    list: [
      {
        hashId: `id-${offset}-1`,
        type: "Video",
        title: null,
        about: `好的风景， - ${offset} : 1 -不只是优美#视觉符号#的传递与艺 人专辑整体风格的契合。从而达到个性的。`,
        cover: videoData[Math.floor(Math.random()*videoData.length)],
        author: {
          nickName: "美国新秀POT",
          face: {
            id: 11,
            path: 'com-speeder.oss-cn-hongkong.aliyuncs.com/tmp/face_author.png',
            style: null,
          }
        },
        recommend: {
          type: 'group',
          mainPerson: null,
          relations: [],
          dimension: 1,
          group: {
            hashId: 'grout1',
            title: "军迷俱乐部",
            cover: {
              id: 11,
              path: 'com-speeder.oss-cn-hongkong.aliyuncs.com/tmp/group_cover.png',
              style: null,
            }
          }
        }
      }
    ]
  }
}


export const listData = {
  hasNext: true,
  list: [
    {
      id: 1,
      type: "Video",
      about: "好的风景，不只是优美#视觉符号#的传递与艺 人专辑整体风格的契合。从而达到个性的。",
      cover: {
        id: 1,
        path: "com-speeder.oss-cn-hongkong.aliyuncs.com/tmp/video_1.png",
        style: null
      },
      author: {
        nickName: "美国新秀POT",
        face: {
          id: 11,
          path: 'com-speeder.oss-cn-hongkong.aliyuncs.com/tmp/face_author.png',
          style: null,
        }
      }
    },
    {
      id: 11,
      type: "Video",
      about: "好的风景，不只是优美#视觉符号#的传递与艺 人专辑整体风格的契合。从而达到个性的。",
      cover: {
        id: 1,
        path: "com-speeder.oss-cn-hongkong.aliyuncs.com/tmp/video_1.png",
        style: null
      },
      author: {
        nickName: "美国新秀POT",
        face: {
          id: 11,
          path: 'com-speeder.oss-cn-hongkong.aliyuncs.com/tmp/face_author.png',
          style: null,
        }
      }
    },
    {
      id: 12,
      type: "Video",
      about: "好的风景，不只是优美#视觉符号#的传递与艺 人专辑整体风格的契合。从而达到个性的。",
      cover: {
        id: 1,
        path: "com-speeder.oss-cn-hongkong.aliyuncs.com/tmp/video_1.png",
        style: null
      },
      author: {
        nickName: "美国新秀POT",
        face: {
          id: 11,
          path: 'com-speeder.oss-cn-hongkong.aliyuncs.com/tmp/face_author.png',
          style: null,
        }
      }
    },
    {
      id: 13,
      type: "Video",
      about: "好的风景，不只是优美#视觉符号#的传递与艺 人专辑整体风格的契合。从而达到个性的。",
      cover: {
        id: 1,
        path: "com-speeder.oss-cn-hongkong.aliyuncs.com/tmp/video_1.png",
        style: null
      },
      author: {
        nickName: "美国新秀POT",
        face: {
          id: 11,
          path: 'com-speeder.oss-cn-hongkong.aliyuncs.com/tmp/face_author.png',
          style: null,
        }
      }
    },
    {
      id: 14,
      type: "Video",
      about: "好的风景，不只是优美#视觉符号#的传递与艺 人专辑整体风格的契合。从而达到个性的。",
      cover: {
        id: 1,
        path: "com-speeder.oss-cn-hongkong.aliyuncs.com/tmp/video_1.png",
        style: null
      },
      author: {
        nickName: "美国新秀POT",
        face: {
          id: 11,
          path: 'com-speeder.oss-cn-hongkong.aliyuncs.com/tmp/face_author.png',
          style: null,
        }
      }
    },
    {
      id: 15,
      type: "Video",
      about: "好的风景，不只是优美#视觉符号#的传递与艺 人专辑整体风格的契合。从而达到个性的。",
      cover: {
        id: 1,
        path: "com-speeder.oss-cn-hongkong.aliyuncs.com/tmp/video_1.png",
        style: null
      },
      author: {
        nickName: "美国新秀POT",
        face: {
          id: 11,
          path: 'com-speeder.oss-cn-hongkong.aliyuncs.com/tmp/face_author.png',
          style: null,
        }
      }
    }
  ]
}

export const videoData = {
  id: 1,
  title: null,
  about: "好的风景，不只是优美#视觉符号#的传递与艺 人专辑整体风格的契合。从而达到个性的。",
  cover: {
    id: 1,
    path: "com-speeder.oss-cn-hongkong.aliyuncs.com/tmp/video_1.png",
    style: null
  },
  author: {
    nickName: "美国新秀POT",
    face: {
      id: 11,
      path: 'com-speeder.oss-cn-hongkong.aliyuncs.com/tmp/face_author.png',
      style: null,
    }
  },
  path: "http://com-speeder.oss-cn-hongkong.aliyuncs.com/videos/1bb5f31de0084c2420ce1052bcca9cf4.mp4"
}

export const articleData = {
  id: 2,
  title: "春节前夕再游故宫，看展览 品年味儿——“贺岁迎祥”紫禁城里过",
  about: null,
  cover: {
    id: 1,
    path: "com-speeder.oss-cn-hongkong.aliyuncs.com/tmp/video_1.png",
    style: null
  },
  author: {
    nickName: "美国新秀POT",
    face: {
      id: 11,
      path: 'com-speeder.oss-cn-hongkong.aliyuncs.com/tmp/face_author.png',
      style: null,
    }
  },
  content: "123123"
}
