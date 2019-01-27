const videoCoverArr  = [
  {id: 113, path: 'com-speeder.oss-cn-hongkong.aliyuncs.com/tmp/video_3.png', style: null},
  {id: 111, path: 'com-speeder.oss-cn-hongkong.aliyuncs.com/tmp/video_1.png', style: null},
  {id: 112, path: 'com-speeder.oss-cn-hongkong.aliyuncs.com/tmp/video_2.png', style: null},
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
        cover: videoCoverArr[0],
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
      },
      {
        hashId: `id-${offset}-2`,
        type: "Video",
        title: null,
        about: `好的风景， - ${offset} : 2 -不只是优美#视觉符号#的传递与艺 人专辑整体风格的契合。从而达到个性的。`,
        cover: videoCoverArr[1],
        author: {
          nickName: "美国新秀POT",
          face: {
            id: 11,
            path: 'com-speeder.oss-cn-hongkong.aliyuncs.com/tmp/face_author.png',
            style: null,
          }
        },
        recommend: {
          type: 'relation',
          mainPerson: {
            hashId: 'mainperson',
            name: "龙浩",
            face: {
              id: 11,
              path: 'com-speeder.oss-cn-hongkong.aliyuncs.com/tmp/face_1.png',
              style: null,
            }
          },
          praiseText: "不错呦",
          relations: [],
          dimension: 1,
          group: null,
        }
      },
      {
        hashId: `id-${offset}-3`,
        type: "Video",
        title: null,
        about: `好的风景， - ${offset} : 1 -不只是优美#视觉符号#的传递与艺 人专辑整体风格的契合。从而达到个性的。`,
        cover: videoCoverArr[2],
        author: {
          nickName: "美国新秀POT",
          face: {
            id: 11,
            path: 'com-speeder.oss-cn-hongkong.aliyuncs.com/tmp/face_author.png',
            style: null,
          }
        },
        recommend: {
          type: 'relation',
          mainPerson: {
            hashId: 'mainperson',
            name: "吴亦凡",
            face: {
              id: 11,
              path: 'com-speeder.oss-cn-hongkong.aliyuncs.com/tmp/face_wuyifan.png',
              style: null,
            }
          },
          praiseText: "不错呦",
          relations: [
            {hashId: 're11', nickName: "相关用户1", face: {id:11, style:null, path:"com-speeder.oss-cn-hongkong.aliyuncs.com/tmp/face_1.png"}},
            {hashId: 're12', nickName: "相关用户2", face: {id:11, style:null, path:"com-speeder.oss-cn-hongkong.aliyuncs.com/tmp/face_2.png"}},
            {hashId: 're13', nickName: "相关用户3", face: {id:11, style:null, path:"com-speeder.oss-cn-hongkong.aliyuncs.com/tmp/face_3.png"}},
          ],
          dimension: 3,
          group: null,
        }
      },
      {
        hashId: `id-${offset}-3`,
        type: "Article",
        title: "春节前夕再游故宫，看展览 品年味儿——“贺岁迎祥”紫禁城里",
        about: `故宫博物院院长单霁翔表示，春节作为中华民族最隆重的传统节日，寄托着人民群众“回家过年”的美好期盼。近年来，越来越多的人会在春节假期规划中给“博物馆”留有一席之地，“博物馆里过大年”已从一个响亮的口号，成为博物馆界的一种常态。为了让观众在浓浓的文化氛围中感受别样年味，故宫博物院特举办己亥春节大展“贺岁迎祥——紫禁城里过大年”，以破纪录的近千件文物展示数量，恢复多种昔日皇宫过年的装饰、活动的展览创新形式，为观众呈现一个充满年味的紫禁城。`,
        cover: {id:12, style:null, path: 'com-speeder.oss-cn-hongkong.aliyuncs.com/tmp/article_1.png'},
        author: {
          nickName: "美国新秀POT",
          face: {
            id: 11,
            path: 'com-speeder.oss-cn-hongkong.aliyuncs.com/tmp/face_author.png',
            style: null,
          }
        },
        recommend: {
          type: 'relation',
          mainPerson: {
            hashId: 'mainperson',
            name: "吴亦凡",
            face: {
              id: 11,
              path: 'com-speeder.oss-cn-hongkong.aliyuncs.com/tmp/face_wuyifan.png',
              style: null,
            }
          },
          praiseText: "不错呦",
          relations: [
            {hashId: 're11', nickName: "相关用户1", face: {id:11, style:null, path:"com-speeder.oss-cn-hongkong.aliyuncs.com/tmp/face_1.png"}},
            {hashId: 're12', nickName: "相关用户2", face: {id:11, style:null, path:"com-speeder.oss-cn-hongkong.aliyuncs.com/tmp/face_2.png"}},
            {hashId: 're13', nickName: "相关用户3", face: {id:11, style:null, path:"com-speeder.oss-cn-hongkong.aliyuncs.com/tmp/face_3.png"}},
          ],
          dimension: 3,
          group: null,
        }
      },
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
