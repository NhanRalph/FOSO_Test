import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const socials = [
  {
    name: "facebook",
    link: "https://www.facebook.com/",
    icon: faFacebook,
  },
  {
    name: "linkedin",
    link: "https://www.linkedin.com/",
    icon: faLinkedin,
  },
  {
    name: "twitter",
    link: "https://twitter.com/",
    icon: faTwitter,
  },
];

export default function ShareSocial() {
  return (
    <div className="absolute left-[4%] top-[2%] flex flex-col space-y-4">
      <div className="text-base font-bold">Chia sẻ</div>
      <div className="flex flex-col space-y-4 items-center">
        {socials.map((social, index) => (
            <div key={index} className="cursor-pointer h-12 w-12 rounded-lg border border-2 border-green-500 flex items-center justify-center">
                <a href={social.link} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={social.icon} size="lg" color="green" />
                </a>
            </div>
        ))}
      </div>
    </div>
  );
}
