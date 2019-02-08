import React, { Component } from "react";

import Hero from "components/Landing/Hero";
import ColumnStats from "components/PostLanding/components/ColumnStats"
import Collage from "components/PostLanding/components/Collage"
import DisplayText from "components/PostLanding/components/DisplayText"
import BigStat from "components/PostLanding/components/BigStat"
import ColumnButtons from "components/PostLanding/components/ColumnButtons"
import WinnerHighlight from "components/PostLanding/components/WinnerHighlight"
import ProjectHighlight from "components/PostLanding/components/ProjectHighlight"
import ShareButton from "components/PostLanding/components/ShareButton"
import AmazonLogo from "assets/sponsors/Amazon-GIGA/amazon.svg"

class Sponsor extends Component {
  render() {
    return (
      <div className="postlanding">
        <Hero minimal sponsorName='Amazon' sponsorLogo={AmazonLogo} sponsorLogoAlt='Amazon Logo'/>
        <div className="postlanding__container">
          <DisplayText />
          <ColumnStats stats={[
            {stat: 498, describer: `Hackers in Attendance`},
            {stat: 85, describer: `Completed Projects`},
            {stat: `10,000`, describer: `Dollars in Prizes`},
          ]}/>
          <DisplayText />
          <Collage photos={[
            `https://lh3.googleusercontent.com/3qg6tpnzBPT3dV9pN7iqc3ezkbS0mLsGkEadMNJzhwvyK9V4TUe2qfxJRqw1loTnRiqqqXAo2m963NcYAspODtfTErj_xTHCeguYAyhueGjpwR2MAL8pYnfIwZbevawy5ppOndOZLjskA4R5QjuQTNNc5FRJeMxiepGPvcYRQQIVXFhixgaECn_hx-TYLqdmVGHRVzLgbCn8heQFfDf2DvSN0eL074rrq1u8_UodxJvdSjLqMo891_SSxyOJB78-z4x8gmt1s1fJR-Dc4PxyaOnJDQ66JNMX09vICHbiDPJiCRE9FZOMhvxjnLJ5BALKgYglt3jhDD3GM8ubj9JuV_yLyN8LZ5WJy4PouC00TAL0ZsxC9531QueetWaUPK5CJ-g_mLw-xWD4ufd7uxIzNmufLSx5m53FBIjITqj4U2In6GVW_Rbs_uRVsxQ92NCNgBjVj65Vfkd74LG1x9EBt9OwIyvogysW-_0KqU1lp4LBEf1n8NMkaF1tcJY1Rc1jwoTN9kzBWeIVXNagnWtX_Ro-fzkK3NRBXmb6l3AevJ99Y4G5o5iYNw572fkPSo6AWe6nbaNamZ8CjmadDLYdxzGKqeJXUJVFP0BbIkhB4mhpwF91Bste-C2TCN0eBzf-nKMmun1Dsj4qhp0rX7Pd9dGJvA8WEXtuXo7LcuG-1CR4JJdLTrZVnCLZ1R3hDsGQilr89aXoZ7q4r34YoZXcXa4m=w2298-h1532-no`,
            `https://lh3.googleusercontent.com/p7qYqDLXUR_VG76RvaoaJWvkUJE0HC_tw1t_i6Rm8t-gK02h0wTi9RtAS9wHZ35tnQMi8XKFOSOGShPB9PYV71z4EzAZWpl4vSRO-mbzqvxaw-W4MTLKKwMqLCsIThNwjnntCnormHJe6Hu6Tjp7DEV4JSEbGJ6U8U4E96nOFY4V1andIMLXi2jX-qnQPtQKELhR1Tr13n20BAcdClKXwcaqNHIsnjOdn9b4DbbKWoXDjgAxSlGnFQ3rz8ExKGYve0VWJ4S_8-DMW1rDZgUpdzX0jXaOc5_9250ff03bLAsqH1B15NcjedDiu-s-PDssXxO_QlSCa8crj8eOWOZ55dzQxnoXx44vREycL0eM2QkSIAwPdJaG9Ix_PvqpIl4f_a1rsvKYMzap0eExWk0Tl3uj6v4TRfZZGgBbTu2SS9-_k9BPG5faxHdWG4e0rqdYD8NJjvhsKWTs7QWbGCRwb-3TuFIDiE_RTTbHDbt2gP_xqOHdwTPQAyqZaU1nMxMUBVDMNA0lpfMQaQptFfo47lCxsBKtja7s7MSlvkmzikAOaf7HmFpAbuxa3byKHCCv6jOY2QXbUFzsWW78uxzARiHlv37K79XRnUz-B-26O-9EEjHCFY_dE9ESA7KjLclns3AH4PNQC56cxLuOTgVu-F6LQAV8APDk8SqB29qoq8GnM6g0v_WkzIIZV78mQ3704a52a7P-jUuNxi4inJcLVpmJ=w2298-h1532-no`,
            `https://lh3.googleusercontent.com/lIJkI4oAJ1BfufgKNo73ObtM8XwYu9ZO_NfJW7xPjfmxSbL8QrDEA6psPMvfxZgDzRRPWbqvvSYagtBvV_zq307Yj2PAPTXLmv4D38ZXpzLA0TRT3MrTud4C-YPDaw6t5RWAO_RDk7CmxPpqb8cK_XNxwSeMRkW9H2HQJ-oWEOjMmsohFbHY77VHvgCIwYENluHVn9bPzMs_8w6VjbYWAeGnXC5Vi1wWl3b2fSSmsp2zPn05cVmQQjGDUEe1h4foUiq7JZzFH6FjdjB-Pb_WBvfSMv7GpFgGCmq_h-ddRa7Qd4zNU4u8fQJ8eQtvCGw7WooNpBKJYsfPh3jNg5XtQAXjZ7tO-kD_cz_TpDh_3d3x9BuwWPuQvQ8lWsjbrXVZY-hcXLji0xWld5gg4YP3VfDl9Ljg9lf9-3XGPTTn7_S5QUZpUWKkWrAqI906KQcWyjurUpr7Jw8JOLVY8x3FpkGCaP-LgfRvU-U4s0jGZBO424d45SV16YD5drSS4Az54AQJDUTpp8ct5ARTVmnDAMg8yUbkDTcG1VeS24F_JgYZwVGsOVeVSW_KBuo2CSI4Zg3iFlnsqoEEDJGLop3bSv6fLwABCwiBh5T7xsrVnVIeuzMHc0_8E-y7nlIBsVwNlBTHyPC0dMViQe7wj-6H8UOsMnULd0ZWkfAWklZTIzwa1wscaANyHlpzcgGLaKTxzWQj4_H0Xk00UVSVCQEgJUd9=w2298-h1532-no`,
          ]}/>
          <BigStat />
          <div className="twocol">
            <DisplayText left />
            <ProjectHighlight />
          </div>
          <WinnerHighlight />
          <DisplayText />
          <ColumnStats stats={[
            {stat: 498, describer: `Hackers in Attendance`},
            {stat: 85, describer: `Completed Projects`},
            {stat: `10,000`, describer: `Dollars in Prizes`},
          ]}/>
          <DisplayText />
          <ColumnButtons buttons={[
            {
              icon: `image`,
              alt: `Icon of a picture`,
              text: `View photo album`,
              link: `https://google.com/`,
              color: `FCF9FF`,
            },
            {
              icon: `film`,
              alt: `Icon of a film roll`,
              text: `See videos`,
              link: `https://google.com/`,
              color: `FCF9FF`,
            },
          ]}/>
          <DisplayText />
          <ShareButton />
        </div>
      </div>
    );
  }
}

export default Sponsor;
