// videos
const videos = [
  {
    imageURL:
      'https://i.ytimg.com/vi/9Gj47G2e1Jc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDCftWPQUoirBAAbAPUTXBozU325g',
    title: 'Mariya Takeuchi Plastic Love 竹内 まりや',
    duration: '7:57',
    channel: 'Gun',
    views: '42M views',
    when: '2 years ago'
  },

  {
    imageURL:
      'https://i.ytimg.com/vi/fNFzfwLM72c/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBgjhXdYepD1YKdm-qqh7O4kCmEhg',
    title: "Bee Gees - Stayin' Alive (Official Music Video)",
    duration: '4:10',
    channel: 'beegees',
    views: '154M views',
    when: '4 years ago'
  },
  {
    imageURL:
      'https://i.ytimg.com/vi/eNvUS-6PTbs/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCTDwUg50xFz69u7s8qbmW9JlfECw',
    title: 'Modern Talking - Cheri Cheri Lady (Official Music Video)',
    duration: '3:18',
    channel: 'Modern Talking Offiziell',
    views: '364M views',
    when: '11 years ago'
  },
  {
    imageURL:
      'https://i.ytimg.com/vi/Zi_XLOBDo_Y/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAYUOFhA8mpvRsefUwdWQDNtEoBsg',
    title: 'Michael Jackson - Bille Jean (Official Video)',
    duration: '4:56',
    channel: 'Michael Jackson',
    views: '1B views',
    when: '11 years ago'
  },
  {
    imageURL:
      'https://i.ytimg.com/vi/WQnAxOQxQIU/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDHdvjcNk-4vTZM26CfJGP_H6Iheg',
    title: 'Savage Garden - Truly Madly Deeply',
    duration: '4:22',
    channel: 'Savage Garden',
    views: '351M views',
    when: '11 years ago'
  },
  {
    imageURL:
      'https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDd2KtelLHaNSXrI9_5K-NvTscKNw',
    title: 'Rick Astley - Never Gonna Give You Up (Official Music Video)',
    duration: '3:33',
    channel: 'Rick Astley',
    views: '1B views',
    when: '11 years ago'
  },
  {
    imageURL:
      'https://i.ytimg.com/vi/4fndeDfaWCg/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCzu8HegWIxsm-9KkRm4sdVcREVmw',
    title: 'Backstreet Boys - I Want It That Way (Official HD Video)',
    duration: '3:40',
    channel: 'Backstreet Boys',
    views: '973M views',
    when: '11 years ago'
  },
  {
    imageURL:
      'https://i.ytimg.com/vi/E8gmARGvPlI/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCeUYLO9_WJulBgc3amCshiNEgirA',
    title: 'Wham! - Last Christmas (Official Video)',
    duration: '4:39',
    channel: 'What!',
    views: '615M views',
    when: '11 years ago'
  },
  {
    imageURL:
      'https://i.ytimg.com/vi/btPJPFnesV4/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLA9cIZbP_-MpRyUvvEkwmbk8DF4Kg',
    title: 'Survivor - Eye Of The Tiger (Official HD Video)',
    duration: '4:05',
    channel: 'Survivor Band',
    views: '719M views',
    when: '11 years ago'
  },
  {
    imageURL:
      'https://i.ytimg.com/vi/9u7hGkL57N8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAxcFiE9lTJeuPNvAm4o2Qu2GulgQ',
    title: 'Darren Hayes - Insatiable (Official Music Video)',
    duration: '4:22',
    channel: 'Darren Hayes',
    views: '54M views',
    when: '11 years ago'
  }
]

const videoSuggestions = document.querySelector('#video-suggestions')

for (let video of videos) {
  videoSuggestions.innerHTML += `
    <div class="suggestion">
      <div class="preview-image">
        <div class="image">
          <img src="${video.imageURL}" alt="${video.title}"> 
          <span class="duration">${video.duration}</span>
        </div>
      </div>
      <div class="side-details">
        <span class="title">${video.title}</span>
        <div class="channel">${video.channel}</div>
        <div class="views-when"><span class="views">${video.views}</span><span>・</span><span>${video.when}</span></div>
      </div>
      <div class="three-dots-vertical">
        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g><path d="M12,16.5c0.83,0,1.5,0.67,1.5,1.5s-0.67,1.5-1.5,1.5s-1.5-0.67-1.5-1.5S11.17,16.5,12,16.5z M10.5,12 c0,0.83,0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5s-0.67-1.5-1.5-1.5S10.5,11.17,10.5,12z M10.5,6c0,0.83,0.67,1.5,1.5,1.5 s1.5-0.67,1.5-1.5S12.83,4.5,12,4.5S10.5,5.17,10.5,6z"></path></g></svg>
      </div>
    </div>
  `
}

videoSuggestions.innerHTML += `<button id="show-more">Show More</button>`

// comments
const comments = [
  {
    avatar:
      'https://yt3.ggpht.com/ytc/AKedOLQ42riil-K4hCqXZzPMedCnfU5YyDfN-6cCcuOD=s48-c-k-c0x00ffffff-no-rj',
    name: 'Wutaii1 Nostalgia',
    time: '2 years ago',
    content: 'The Saxophone is the stuff of legends.',
    likes: '88K',
    replies: 490
  },
  {
    avatar:
      'https://yt3.ggpht.com/gLwb-34-1QS-QM5PzJRZbPvXlDicvQc2Iizfo1tJvnEozS7d-NNG8CKtxo1_GMosyXh0pXy4=s48-c-k-c0x00ffffff-no-rj',
    name: '  killuaspartner',
    time: '3 days ago',
    content:
      "fun fact: this song isn't supposed to be romantic it's actually about him feeling guilty about cheating",
    likes: '907',
    replies: 19
  },
  {
    avatar:
      'https://yt3.ggpht.com/rpdjmzYMWlEHcCXT2ZHqOStfph-rWPgnUxKKVD_jUMC5eN7gL0GrMlPJoK_UqmTUFTnrK_QD=s48-c-k-c0x00ffffff-no-rj',
    name: 'Adrienne B.',
    time: '2 days ago',
    content:
      'listening to that so often. deeply feeling it. THIS LEGEND NEVER DIES.',
    likes: '219',
    replies: 0
  },
  {
    avatar:
      'https://yt3.ggpht.com/ytc/AKedOLQWEnHKs1TpPsxh_fqsCvfiYKQAu-FWo0JkpDZ5sg=s48-c-k-c0x00ffffff-no-rj',
    name: 'Keanu Boyd',
    time: '7 months ago',
    content: 'Millions of babies have been born because of this classic',
    likes: '3.9K',
    replies: 47
  },
  {
    avatar:
      'https://yt3.ggpht.com/fs1dupCh60cbMSpB-YXIBtDJ70qZRo8AK_TvjTVn-bgNmCREp4vy5BOrHukI8-pPbZJcWbKq=s48-c-k-c0x00ffffff-no-rj',
    name: 'Fragile soul of the spotless mind',
    time: '5 days ago',
    content:
      'After all this time, this song still makes me shiver. This song was our first dance song. How funny life is. Our love ended up like this song.',
    likes: '317',
    replies: 0
  },
  {
    avatar:
      'https://yt3.ggpht.com/ytc/AKedOLRoRritaN-ifNmdeNP6tIseq8kpsHgPTSAvzEDsaQ=s48-c-k-c0x00ffffff-no-rj',
    name: 'Shannon H',
    time: '1 year ago',
    content: 'Everybody gangster till that saxophone solo starts playing.',
    likes: '3.7K',
    replies: 27
  },
  {
    avatar:
      'https://yt3.ggpht.com/8JhDEyhooadKyT0_hnV3wn3bbpgpEX-fNbiOjqaVD9H3CShn6GGz5TXlv-9X3rixAHixY4tjtg=s48-c-k-c0x00ffffff-no-rj',
    name: 'sangit khadka',
    time: '1 week ago',
    content:
      'Matter of fact people from our generation will never know this person’s album sold 3.38 million copies in its first week which is till date one of the highest record.',
    likes: '370',
    replies: 6
  }
]

const commentsContainer = document.querySelector('#comments')

for (let comment of comments) {
  commentsContainer.innerHTML += `
    <div class="comment">
      <div class="top">
        <div class="left">
          <img src="${comment.avatar}" alt="" />
        </div>
        <div class="middle">
          <div class="top">
            <span class="name">${comment.name}</span>
            <span class="time">${comment.time}</span>
          </div>
          <div class="middle">
            ${comment.content}
          </div>
          <div class="bottom">
            <div class="svg">
              <svg viewBox="0 0 16 16" preserveAspectRatio="xMidYMid meet" focusable="false"><g class="style-scope yt-icon"><path d="M12.42,14A1.54,1.54,0,0,0,14,12.87l1-4.24C15.12,7.76,15,7,14,7H10l1.48-3.54A1.17,1.17,0,0,0,10.24,2a1.49,1.49,0,0,0-1.08.46L5,7H1v7ZM9.89,3.14A.48.48,0,0,1,10.24,3a.29.29,0,0,1,.23.09S9,6.61,9,6.61L8.46,8H14c0,.08-1,4.65-1,4.65a.58.58,0,0,1-.58.35H6V7.39ZM2,8H5v5H2Z"></path></g></svg>
            </div>
            <span class="likes">${comment.likes}</span>
            <div class="svg">
              <svg viewBox="0 0 16 16" preserveAspectRatio="xMidYMid meet" focusable="false"><g><path d="M3.54,2A1.55,1.55,0,0,0,2,3.13L1,7.37C.83,8.24,1,9,2,9H6L4.52,12.54A1.17,1.17,0,0,0,5.71,14a1.49,1.49,0,0,0,1.09-.46L11,9h4V2ZM6.07,12.86a.51.51,0,0,1-.36.14.28.28,0,0,1-.22-.09l0-.05L6.92,9.39,7.5,8H2a1.5,1.5,0,0,1,0-.41L3,3.35A.58.58,0,0,1,3.54,3H10V8.61ZM14,8H11l0-5h3Z"></path></g></svg>
            </div>
            <span class="replies">${comment.replies} REPLIES</span>
          </div>
        </div>
        <div class="end">
          <div class="svg">
            <svg
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
            >
              <g>
                <path
                  d="M12,16.5c0.83,0,1.5,0.67,1.5,1.5s-0.67,1.5-1.5,1.5s-1.5-0.67-1.5-1.5S11.17,16.5,12,16.5z M10.5,12 c0,0.83,0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5s-0.67-1.5-1.5-1.5S10.5,11.17,10.5,12z M10.5,6c0,0.83,0.67,1.5,1.5,1.5 s1.5-0.67,1.5-1.5S12.83,4.5,12,4.5S10.5,5.17,10.5,6z"
                ></path>
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div class="bottom">
        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g ><path d="M18,9l-6,6L6,9H18z"></path></g></svg>
        <span>View 000 replies</span>
      </div>
    </div>
  `
}
