import React from "react";

const sponsorTemplate = props => [
	{
		name: `Hero`,
		props: {
			minimal: true,
			sponsorName: props.name,
			sponsorLogo: props.logo,
			sponsorLogoAlt: `${props.name} logo`
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
        { stat: `1,176`, describer: `Attendee Applications` },
        { stat: 604, describer: `Hackers in Attendance` },
        { stat: 86, describer: `Completed Projects` }
      ]
    }
  },
  {
    name: `DisplayText`,
    props: {
      header: `Participating hackers brought nationwide exposure to your company!`,
      paragraph: `Of the roughly 600 attendees who participated, 62% were UCSC students while the rest hailed from outside the university. This shows that not only did the event garner interest within the local community, but also that in its sixth year, CruzHacks established its credibility outside the circles of Santa Cruz. Hackers from other UC schools, high schoolers, and college students from all around the U.S. (including one team from the University of Waterloo in Canada!) came out to interact with your company and development technologies!`
    }
  },
  {
    name: `Collage`,
    props: {
      photos: props.photos
    }
  },
  props.prize && {
    name: `BigStat`,
    props: {
      metric: {
        intro: `The ${props.prize.category} sponsor prize category accumulated...`,
        stat: props.prize.winners,
        outro: [
          `complete hackathon projects! View your sponsor projects `, <a href={props.prize.link} target="_blank">here</a>, `!`
        ]
      }
    }
	},
	props.project && {
		name: `ProjectHighlight`,
		props: {
			intro: {
				header: `Congratulations to ${props.project.name}!`,
				paragraph: props.project.paragraph
			},
			project: props.project
		}
	},
	props.winner && {
		name: `WinnerHighlight`,
		props: {
			winners: {
				photo: {
					url: props.winner,
					alt: 'Winning CruzHacks team'
				},
				info: props.winners
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
				{stat: `30%`, describer: `Female/Non-binary`},
				{stat: `47%`, describer: `First time hackers`},
				{stat: 43, describer: `Visiting University Students`},
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
			header: `Social Media Statistics`,
			paragraph: `CruzHacks stays connected—we kept our social media pages updated throughout the event and offered numerous different 'Social Media Challenges'. From best project logo to first person to take a selfie with a CruzHacks organizer, attendees were constantly engaged with our social media accounts.`
			
		}
	},
	{
		name: `ColumnStats`,
		props: {
			stats: [
				{stat: 1010, describer: `Total Followers`},
				{stat: 2620, describer: `Social Media Impressions`},
				{stat: `61`, describer: `New LinkedIn Followers`},
			]
		}
	},
	{
		name: `DisplayText`,
		props: {
			header: `Share this retrospective!`,
			paragraph: `Want to share this retrospective with the rest of your company, or your social network? Use one of the buttons below to copy the link of this page, or perhaps share it on LinkedIn or your internal Slack community!`
		}
	},
	{
		name: `ShareButton`,
		props: {
			sponsor: props.name
		}
	}
];

export default sponsorTemplate
