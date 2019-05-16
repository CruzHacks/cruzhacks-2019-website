import React from "react";

const sponsorTemplate = [
	{
		name: `Hero`,
		props: {
      minimal: true,
      campaignButtons: true
		}
	},
  {
    name: `DisplayText`,
    props: {
      header: `Diverse and impactful on a number of fronts, CruzHacks 2019 was a success`,
      paragraph: `From January 18 to January 20, 2019, UCSC’s Stevenson Event Center was transformed into a bustling playground for our diverse group of over 600 hackers to turn their visions for social change into tangible projects. The 36 hours of hacking were as hectic as they were productive. As hackers downed bottle after bottle of Yerba Mate and Soylent, mentors and your representatives were available to advise teams on their project ideas and work out any challenges they encountered along the way.`
    }
  },
  {
    name: `ColumnStats`,
    props: {
      stats: [
        { stat: `1,176`, describer: `Attendee applications` },
        { stat: 604, describer: `Hackers in attendance` },
        { stat: `$10,000`, describer: `Dollars in prizes` }
      ]
    }
  },
  {
    name: `DisplayText`,
    props: {
      header: `Hackers from across the country!`,
      paragraph: `Of the roughly 600 attendees who participated, 81% were UCSC students while the rest hailed from outside the university. The event not only garnered interest within the local community, but also established its credibility outside the circles of Santa Cruz. Hackers from other UC schools, high schoolers, and college students from all around the U.S. (including one team from the University of Waterloo in Canada!) came out to participate!`
    }
  },
  {
    name: `Collage`,
  },
  {
    name: `BigStat`,
    props: {
      metric: {
        intro: `CruzHacks created a total of...`,
        stat: 86,
        outro: [
          `complete hackathon projects! View all of the projects `, <a href="https://cruzhacks-2019.devpost.com/submissions" target="_blank">here</a>, `!`
        ]
      }
    }
	},
	{
		name: `ProjectHighlight`,
		props: {
			intro: {
				header: `Congratulations to our Tech Cares winner: Iris!`,
				paragraph: `"We had the idea to use machine learning in order to solve a common problem for people diagnosed with Alzheimer’s: helping them to remember things."`
			},
			project: {
        name: 'Iris',
        description: 'An AI powered virtual assistant that uses facial recognition to help Alzheimer\'s patients combat memory loss.',
        link: 'https://devpost.com/software/iris-io',
        photo: {
          url: 'https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_thumbnail_photos/000/745/753/datas/medium.jpg',
          alt: 'Iris Logo'
        },
      }
		}
	},
	{
		name: `WinnerHighlight`,
		props: {
			winners: {
				photo: {
					url: `https://farm8.staticflickr.com/7862/39946288273_d91f36ccaa_z_d.jpg`,
					alt: 'Winning CruzHacks team'
				},
				info: [{
          name: 'Torin Foss',
          photo: 'https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/user_photos/000/747/339/datas/profile.JPG',
          linkedin: 'https://www.linkedin.com/in/trfoss',
        }, {
          name: 'Esteban Vasquez',
          photo: 'https://avatars3.githubusercontent.com/u/46833726?v=4?height=180&width=180',
          linkedin: 'https://www.linkedin.com/in/vasquezesteban/',
        }, {
          name: 'Stewart Dulaney',
          photo: 'https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/user_photos/000/429/527/datas/profile.jpg',
          linkedin: 'https://www.linkedin.com/in/stewartdulaney',
        }, {
          name: 'Andrew Zhu',
          photo: 'https://media.licdn.com/dms/image/C4E03AQFAcM1XrF72Vg/profile-displayphoto-shrink_800_800/0?e=1556755200&v=beta&t=IgDe_1f0odC9mtOTCeVwlAyLDR15pQQBkCz7wvZnxd0',
          linkedin: 'https://www.linkedin.com/in/angzhu/',
        }, {
          name: 'Tejas Shah',
          photo: 'https://media.licdn.com/dms/image/C5603AQH5dX8BQXzDCA/profile-displayphoto-shrink_800_800/0?e=1556755200&v=beta&t=Rb9a33a04S9qjVIapyJ5Jw0Wn0CGhcJL7P_BJZbpl94',
          linkedin: 'https://www.linkedin.com/in/t-shah/',
        }]
			}
		}
	},
	{
		name: `DisplayText`,
		props: {
			header: `Inclusivity is CruzHack's Goal`,
			paragraph: `CruzHacks brings together a diverse and inclusive group of students to develop innovative solutions and solve real world challenges; we take pride in organizing our event to expand future diversity within the tech industry by prioritizing opportunities for underrepresented communities, and by encouraging such attendees to chart new paths for their stories within tech.`

		}
	},
	{
		name: `ColumnStats`,
		props: {
			stats: [
				{stat: `28%`, describer: `Female/Non-binary`},
				{stat: `47%`, describer: `First time hackers`},
				{stat: 44, describer: `Universities Represented`},
			]
		}
	},
	{
		name: `DisplayText`,
		props: {
			header: `CruzHacks Media`,
			paragraph: `Click one of the buttons below to view photos or timelapses from the event. Relive the event through various photos, or experience the hackathon cycles in our event timelapses!`
		}
	},
	{
		name: `ColumnButtons`,
		props: {
			buttons: [
				{
					icon: `image`,
					alt: `Icon of a picture`,
					text: `View photo album`,
					link: `https://photos.app.goo.gl/T6dhFZbTbKU1oFcH9`,
					color: `FCF9FF`,
				},
				{
					icon: `film`,
					alt: `Icon of a film roll`,
					text: `See videos`,
					link: `https://www.youtube.com/channel/UCUD8rjCLCokNzK_rcd4JUmA`,
					color: `FCF9FF`,
				},
			]
		}
  },
  {
    name: `DisplayText`,
    props: {
      header: `CruzHacks in the News`
    }
  },
  {
    name: `MediaButtons`,
    props: {
      media: [
        {
          name: `CruzHacks 2019 a Success`,
          source: `ProductOps Blog`,
          link: `https://blog.productops.com/cruzhacks-2019-a-success/?fbclid=IwAR2M8Kw0pd-M253yO9iDwcfcHy07CaFfEEtqeCiTbYiDOb_TSqQNoffxV78`,
          image: `https://blog.productops.com/content/images/2019/01/image--2--2.png`,
          alt: `Three smiling ProductOps representatives posing at their sponsorship table.`,
        },
        {
          name: `CruzHacks Returns`,
          source: `Santa Cruz Tech Beat`,
          link: `https://www.cityonahillpress.com/2019/01/25/cruzhacks-returns/`,
          image: `https://www.cityonahillpress.com/wp-content/uploads/2019/01/WEB-Cruz-Hacks-1.19.19-21.jpg`,
          alt: `Large group of around one hundred students working on their laptops and projects at CruzHacks 2019`,
        },
        {
          name: `Tech MeetUp presents CruzHacks winners`,
          source: `Santa Cruz Sentinel`,
          link: `https://www.santacruzsentinel.com/2019/02/12/tech-meetup-presents-cruzhacks-winners/`,
          image: `https://www.santacruzsentinel.com/wp-content/uploads/2019/02/IMG_1073.jpg?w=707`,
          alt: `Four student winners of CruzHacks 2019, of the team "Period Helper", pose with their prizes—Amazon echo dots. From left: Sriya Lingampalli, Leah George, Disha Mevada and Keerthana Routhu.`,
        }
      ]
    }
  },
	{
		name: `DisplayText`,
		props: {
			header: `Help shape our future`,
      paragraph: `Each year we strive to deliver an exciting, inclusive, and fun event focused on building tech solutions for social good. This requires a considerable amount of wo/manpower and resources towards logistics, food, electricity, internet, merch, and more for the ~40 continuous hours 
      that CruzHacks spans. Help us put on 2020! `,
      campaignButtons: true
    }
	},
	{
		name: `DisplayText`,
		props: {
			header: `Share this retrospective!`,
			paragraph: `Want to share this retrospective with your friends or your social network? Use one of the buttons below to copy the link of this page, or perhaps share it on Facebook or Twitter!`
		}
	},
  {
		name: `ShareButton`,
	},

];

export default sponsorTemplate
