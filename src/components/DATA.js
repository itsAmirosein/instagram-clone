
export let POST = [
    {
        id: 1,
        isFollowed: false,
        author: 'jaber',
        createDate: '5h',
        isSave: false,
        caption: 'some thing some thing some thing some thing some thing some thing some thing some thing  some thing some thing some thing some thing  some thing some thing some thing some thing   ',
        img: 'https://www.unsplash.it/300/300',
        view:10,
        comments: [
            {
                id: 1,
                body: 'sth',
                createDate: '2h',
                commentedBy: 'jafar',
                isLike: false,
                likeCount: 10,
                replies: [
                    {}
                ],

            },
            {
                id: 2,
                body: 'sth',
                createDate: '1h',
                commentedBy: 'mmd',
                isLike: true,
                likeCount: 20,
                replies: [
                    {
                        id: 1,
                        repliedBy: 'jaber',
                        body: 'sth',
                        createDate: '1h',
                        isLike: false,
                        likeCount: 0,
                    }
                ],
            }
        ],
        likers: [
            {
                id: 1,
                userName: 'hooman',
                avatar: '',
                isFollowed: false,
                bio: 'MyBio',
                following: 20,
                followers: 30,
                isPrivate:true,
                posts:[],
            }
        ]
    },
    {
        id: 2,
        author: 'ahmad',
        isFollowed: false,
        createDate: '3h',
        likeCount: 100,
        isSave: false,
        caption: 'sth',
        img: 'https://www.unsplash.it/300/300',
        view:50,
        comments: [
            {
                id: 1,
                body: 'sth',
                createDate: '1h',
                commentedBy: 'asqar',
                isLike: false,
                likeCount: 20,
                replies: [
                    {}
                ],

            },
            {
                id: 2,
                body: 'sth',
                createDate: '1h',
                commentedBy: 'hoshang',
                isLike: true,
                likeCount: 40,
                replies: [
                    {
                        id: 1,
                        repliedBy: 'hashem',
                        body: 'sth',
                        createDate: '1h',
                        isLike: false,
                        likeCount: 0,
                    }
                ],
            }
        ],
        likers: [
            {
                id: 1,
                userName: 'leili',
                avatar: '',
                isFollowed: false,
                bio: 'MyBio',
                following: 40,
                followers: 50,
                isPrivate: true,
                posts:[],
            }
        ]
    },
    {
        id: 3,
        author: 'asqar',
        isFollowed: false,
        createDate: '9h',
        likeCount: 200,
        isSave: false,
        caption: 'sth',
        img: 'https://www.unsplash.it/300/300',
        view:70,
        comments: [
            {
                id: 1,
                body: 'sth',
                createDate: '4h',
                commentedBy: 'mitra',
                isLike: false,
                likeCount: 70,
                replies: [
                    {}
                ],

            },
            {
                id: 3,
                body: 'sth',
                createDate: '3h',
                commentedBy: 'iman',
                isLike: true,
                likeCount: 20,
                replies: [
                    {
                        id: 1,
                        repliedBy: 'hossein',
                        body: 'sth',
                        createDate: '2h',
                        isLike: false,
                        likeCount: 0,
                    }
                ],
            }
        ],
        likers: [
            {
                id: 1,
                userName: 'zahra',
                avatar: '',
                isFollowed: false,
                bio: 'MyBio',
                following: 10,
                followers: 50,
                isPrivate: true,
                posts:[],
            }
        ]
    },
    {
        id: 4,
        isFollowed: false,
        author: 'gholi',
        createDate: '7h',
        likeCount: 20,
        isSave: false,
        caption: 'sth',
        img: 'https://www.unsplash.it/300/300',
        view:40,
        comments: [
            {
                id: 1,
                body: 'sth',
                createDate: '2h',
                commentedBy: 'sokine',
                isLike: false,
                likeCount: 0,
                replies: [
                    {}
                ],

            },
            {
                id: 2,
                body: 'sth',
                createDate: '1h',
                commentedBy: 'lale',
                isLike: true,
                likeCount: 2,
                replies: [
                    {
                        id: 1,
                        repliedBy: 'taqi',
                        body: 'sth',
                        createDate: '0.5h',
                        isLike: false,
                        likeCount: 0,
                    }
                ],
            }
        ],
        likers: [
            {
                id: 1,
                userName: 'taqi',
                avatar: '',
                isFollowed: false,
                bio: 'MyBio',
                following: 20,
                followers: 30,
                isPrivate: true,
                posts:[],
            }
        ]
    },
    {
        id: 5,
        isFollowed: false,
        author: 'mmdjavad',
        createDate: '4h',
        likeCount: 500,
        isSave: false,
        caption: 'sth',
        img: 'https://www.unsplash.it/300/300',
        view:70,
        comments: [
            {
                id: 1,
                body: 'sth',
                createDate: '2h',
                commentedBy: 'payam',
                isLike: false,
                likeCount: 10,
                replies: [
                    {}
                ],

            },
            {
                id: 2,
                body: 'sth',
                createDate: '1h',
                commentedBy: 'amin',
                isLike: true,
                likeCount: 5,
                replies: [
                    {
                        id: 1,
                        repliedBy: 'payam',
                        body: 'sth',
                        createDate: '1h',
                        isLike: false,
                        likeCount: 0,
                    }
                ],
            }
        ],
        likers: [
            {
                id: 1,
                userName: 'payam',
                avatar: '',
                isFollowed: false,
                bio: 'MyBio',
                following: 20,
                followers: 30,
                isPrivate: true,
                posts:[],
            }
        ]
    },
    {
        id: 6,
        isFollowed: false,
        author: 'rana',
        createDate: '9h',
        likeCount: 50,
        isSave: false,
        caption: 'sth',
        img: 'https://www.unsplash.it/300/300',
        view:100,
        comments: [
            {
                id: 1,
                body: 'sth',
                createDate: '4h',
                commentedBy: 'coolguy',
                isLike: false,
                likeCount: 10,
                replies: [
                    {}
                ],

            },
            {
                id: 2,
                body: 'sth',
                createDate: '1h',
                commentedBy: 'trx-mentor',
                isLike: true,
                likeCount: 20,
                replies: [
                    {
                        id: 1,
                        repliedBy: 'khashayar',
                        body: 'sth',
                        createDate: '1h',
                        isLike: false,
                        likeCount: 0,
                    }
                ],
            }
        ],
        likers: [
            {
                id: 1,
                userName: 'nima',
                avatar: '',
                isFollowed: false,
                bio: 'MyBio',
                following: 20,
                followers: 30,
                isPrivate: true,
                posts:[],
            }
        ]
    },
    {
        id: 7,
        isFollowed: false,
        author: 'armin',
        createDate: '4h',
        likeCount: 700,
        isSave: false,
        caption: 'sth',
        img: 'https://www.unsplash.it/300/300',
        view:1000,
        comments: [
            ,
            {
                id: 1,
                body: 'rohet shad ddsh :)',
                createDate: '2h',
                commentedBy: 'amirosein',
                isLike: false,
                likeCount: 10,



                replies: [
                    {
                        id: 1,
                        repliedBy: 'armin',
                        body: 'deltangetim :)',
                        createDate: '1h',
                        isLike: false,
                        likeCount: 0,
                    }
                ],
            }
        ],
        likers: [
            {
                id: 1,
                userName: 'amirosein',
                avatar: '',
                isFollowed: false,
                bio: 'MyBio',
                following: 0,
                followers: 0,
                isPrivate: true,
                posts:[],
            }
        ]
    },
    {
        id: 8,
        isFollowed: false,
        author: 'kamran',
        createDate: '4h',
        likeCount: 10,
        isSave: false,
        caption: 'sth',
        img: 'https://www.unsplash.it/300/300',
        view:30,
        comments: [
            {
                id: 1,
                body: 'sth sth sth sth sth sth sth sth sth sth sth sth sth sth  sth sth sth sth sth sth sth  sth sth sth sth sth sth sth  sth sth sth sth sth sth sth  sth sth sth sth sth sth sth  sth sth sth sth sth sth sth  sth sth sth sth sth sth sth  sth sth sth sth sth sth sth  sth sth sth sth sth sth sth ',
                createDate: '2h',
                commentedBy: 'kerim',
                isLike: false,
                likeCount: 10,
                replies: [
                    {}
                ],

            },

        ],
        likers: [
            {
                id: 1,
                userName: 'kerim',
                avatar: '',
                isFollowed: false,
                bio: 'MyBio',
                following: 40,
                followers: 70,
                isPrivate: true,
                posts:[],
            }
        ]
    },
    {
        id: 9,
        isFollowed: false,
        isFollowed: false,
        author: 'naqi',
        createDate: '4h',
        likeCount: 70,
        isSave: false,
        caption: 'sth',
        img: 'https://www.unsplash.it/300/300',
        view:170,
        comments: [
            {
                id: 1,
                body: 'sth',
                createDate: '2h',
                commentedBy: 'arasto',
                isLike: false,
                likeCount: 50,
                replies: [
                    {}
                ],

            },
            {
                id: 2,
                body: 'sth sth sth sth sth sth sth sth sth sth sth sth sth sth  sth sth sth sth sth sth sth  sth sth sth sth sth sth sth  sth sth sth sth sth sth sth  sth sth sth sth sth sth sth  sth sth sth sth sth sth sth  sth sth sth sth sth sth sth  sth sth sth sth sth sth sth  sth sth sth sth sth sth sth  ',
                createDate: '1h',
                commentedBy: 'homa',
                isLike: true,
                likeCount: 10,
                replies: [
                    {
                        id: 1,
                        repliedBy: 'panjali',
                        body: 'sth',
                        createDate: '1h',
                        isLike: false,
                        likeCount: 2,
                    }
                ],
            }
        ],
        likers: [
            {
                id: 1,
                userName: 'homa',
                avatar: '',
                isFollowed: false,
                bio: 'MyBio',
                following: 40,
                followers: 50,
                isPrivate: true,
                posts:[],
            }
        ]
    },
    {
        id: 10,
        isFollowed: false,
        author: 'mmdreza',
        createDate: '4h',
        likeCount: 70,
        isSave: false,
        caption: 'sth',
        img: 'https://www.unsplash.it/300/300',
        view:170,
        comments: [
            {
                id: 1,
                body: 'sth',
                createDate: '2h',
                commentedBy: 'abbas',
                isLike: false,
                likeCount: 50,
                replies: [
                    {}
                ],

            },
            {
                id: 2,
                body: 'sth',
                createDate: '1h',
                commentedBy: 'ali',
                isLike: true,
                likeCount: 10,
                replies: [
                    {
                        id: 1,
                        repliedBy: 'reza',
                        body: 'sth',
                        createDate: '1h',
                        isLike: false,
                        likeCount: 2,
                    }
                ],
            }
        ],
        likers: [
            {
                id: 1,
                userName: 'ali',
                avatar: '',
                isFollowed: false,
                bio: 'MyBio',
                following: 40,
                followers: 50,
                isPrivate: true,
                posts:[],
            }
        ]
    },
    {
        id: 11,
        isFollowed: false,
        author: 'abalfz',
        createDate: '4h',
        likeCount: 70,
        isSave: false,
        caption: 'sth',
        img: 'https://www.unsplash.it/630/630',
        view:210,
        comments: [
            {
                id: 1,
                body: 'sth',
                createDate: '2h',
                commentedBy: 'babak',
                isLike: false,
                likeCount: 50,
                replies: [
                    {}
                ],

            },
            {
                id: 2,
                body: 'sth',
                createDate: '1h',
                commentedBy: 'elham',
                isLike: true,
                likeCount: 10,
                replies: [
                    {
                        id: 1,
                        repliedBy: 'farhad',
                        body: 'sth',
                        createDate: '1h',
                        isLike: false,
                        likeCount: 2,
                    }
                ],
            }
        ],
        likers: [
            {
                id: 1,
                userName: 'abbas',
                avatar: '',
                isFollowed: false,
                bio: 'MyBio',
                following: 40,
                followers: 50,
                isPrivate: true,
                posts:[],
            }
        ]
    },
    {
        id: 12,
        isFollowed: false,
        author: 'hamed',
        createDate: '4h',
        likeCount: 70,
        isSave: false,
        caption: 'sth',
        img: 'https://www.unsplash.it/300/300',
        view:170,
        comments: [
            {
                id: 1,
                body: 'sth',
                createDate: '2h',
                commentedBy: 'ali',
                isLike: false,
                likeCount: 50,
                replies: [
                    {}
                ],

            },
            {
                id: 2,
                body: 'sth',
                createDate: '1h',
                commentedBy: 'sanaz',
                isLike: true,
                likeCount: 10,
                replies: [
                    {
                        id: 1,
                        repliedBy: 'mosayeb',
                        body: 'sth',
                        createDate: '1h',
                        isLike: false,
                        likeCount: 2,
                    }
                ],
            }
        ],
        likers: [
            {
                id: 1,
                userName: 'poria',
                avatar: '',
                isFollowed: false,
                bio: 'MyBio',
                following: 40,
                followers: 50,
                isPrivate: true,
                posts:[],
            }
        ]
    },
    {
        id: 13,
        isFollowed: false,
        author: 'mahshid',
        createDate: '4h',
        likeCount: 70,
        isSave: false,
        caption: 'sth',
        img: 'https://www.unsplash.it/300/300',
        view:170,
        comments: [
            {
                id: 1,
                body: 'sth',
                createDate: '2h',
                commentedBy: 'amir',
                isLike: false,
                likeCount: 50,
                replies: [
                    {}
                ],

            },
            {
                id: 2,
                body: 'sth',
                createDate: '1h',
                commentedBy: 'amirali',
                isLike: true,
                likeCount: 10,
                replies: [
                    {
                        id: 1,
                        repliedBy: 'majid',
                        body: 'sth',
                        createDate: '1h',
                        isLike: false,
                        likeCount: 2,
                    }
                ],
            }
        ],
        likers: [
            {
                id: 1,
                userName: 'mehdi',
                avatar: '',
                isFollowed: false,
                bio: 'MyBio',
                following: 40,
                followers: 50,
                isPrivate: true,
                posts:[],
            }
        ]
    },
    {
        id: 14,
        isFollowed: false,
        author: 'akbar',
        createDate: '4h',
        likeCount: 70,
        isSave: false,
        caption: 'sth',
        img: 'https://www.unsplash.it/300/300',
        view:170,
        comments: [
            {
                id: 1,
                body: 'sth',
                createDate: '2h',
                commentedBy: 'hassan',
                isLike: false,
                likeCount: 50,
                replies: [
                    {}
                ],

            },
            {
                id: 2,
                body: 'sth',
                createDate: '1h',
                commentedBy: 'saed',
                isLike: true,
                likeCount: 10,
                replies: [
                    {
                        id: 1,
                        repliedBy: 'kobra',
                        body: 'sth',
                        createDate: '1h',
                        isLike: false,
                        likeCount: 2,
                    }
                ],
            }
        ],
        likers: [
            {
                id: 1,
                userName: 'homa',
                avatar: '',
                isFollowed: false,
                bio: 'MyBio',
                following: 40,
                followers: 50,
                isPrivate: true,
                posts:[],
            }
        ]
    },
    {
        id: 15,
        isFollowed: false,
        author: 'mojtaba',
        createDate: '4h',
        likeCount: 70,
        isSave: false,
        caption: 'sth',
        img: 'https://www.unsplash.it/300/300',
        view:170,
        comments: [
            {
                id: 1,
                body: 'sth',
                createDate: '2h',
                commentedBy: 'moteza',
                isLike: false,
                likeCount: 50,
                replies: [
                    {}
                ],

            },
            {
                id: 2,
                body: 'sth',
                createDate: '1h',
                commentedBy: 'mostafa',
                isLike: true,
                likeCount: 10,
                replies: [
                    {
                        id: 1,
                        repliedBy: 'morteza',
                        body: 'sth',
                        createDate: '1h',
                        isLike: false,
                        likeCount: 2,
                    }
                ],
            }
        ],
        likers: [
            {
                id: 1,
                userName: 'mostafa',
                avatar: '',
                isFollowed: false,
                bio: 'MyBio',
                following: 40,
                followers: 50,
                isPrivate: true,
                posts:[],
            }
        ]
    },
    {
        id: 16,
        isFollowed: false,
        author: 'masomh',
        createDate: '4h',
        likeCount: 70,
        isSave: false,
        caption: 'sth',
        img: 'https://www.unsplash.it/300/300',
        view:170,
        comments: [
            {
                id: 1,
                body: 'sth',
                createDate: '2h',
                commentedBy: 'mona',
                isLike: false,
                likeCount: 50,
                replies: [
                    {}
                ],

            },
            {
                id: 2,
                body: 'sth',
                createDate: '1h',
                commentedBy: 'mobina',
                isLike: true,
                likeCount: 10,
                replies: [
                    {
                        id: 1,
                        repliedBy: 'morad',
                        body: 'sth',
                        createDate: '1h',
                        isLike: false,
                        likeCount: 2,
                    }
                ],
            }
        ],
        likers: [
            {
                id: 1,
                userName: 'mobina',
                avatar: '',
                isFollowed: false,
                bio: 'MyBio',
                following: 40,
                followers: 50,
                isPrivate: true,
                posts:[],
            }
        ]
    },
    {
        id: 17,
        isFollowed: false,
        isFollowed: false,
        author: 'roksana',
        createDate: '4h',
        likeCount: 70,
        isSave: false,
        caption: 'sth',
        img: 'https://www.unsplash.it/300/300',
        view:170,
        comments: [
            {
                id: 1,
                body: 'sth',
                createDate: '2h',
                commentedBy: 'kimia',
                isLike: false,
                likeCount: 50,
                replies: [
                    {}
                ],

            },
            {
                id: 2,
                body: 'sth',
                createDate: '1h',
                commentedBy: 'amirosein',
                isLike: true,
                likeCount: 10,
                replies: [
                    {
                        id: 1,
                        repliedBy: 'bahram',
                        body: 'sth',
                        createDate: '1h',
                        isLike: false,
                        likeCount: 2,
                    }
                ],
            }
        ],
        likers: [
            {
                id: 1,
                userName: 'amirosein',
                avatar: '',
                isFollowed: false,
                bio: 'MyBio',
                following: 40,
                followers: 50,
                isPrivate: true,
                posts:[],
            }
        ]
    },
    {
        id: 18,
        isFollowed: false,
        author: 'saber',
        createDate: '4h',
        likeCount: 70,
        isSave: false,
        caption: 'sth',
        img: 'https://www.unsplash.it/300/300',
        view:170,
        comments: [
            {
                id: 1,
                body: 'sth',
                createDate: '2h',
                commentedBy: 'solat',
                isLike: false,
                likeCount: 50,
                replies: [
                    {}
                ],

            },
            {
                id: 2,
                body: 'sth',
                createDate: '1h',
                commentedBy: 'aqdas',
                isLike: true,
                likeCount: 10,
                replies: [
                    {
                        id: 1,
                        repliedBy: 'nili',
                        body: 'sth',
                        createDate: '1h',
                        isLike: false,
                        likeCount: 2,
                    }
                ],
            }
        ],
        likers: [
            {
                id: 1,
                userName: 'nili',
                avatar: '',
                isFollowed: false,
                bio: 'MyBio',
                following: 40,
                followers: 50,
                isPrivate: true,
                posts:[],
            }
        ]
    }
] 