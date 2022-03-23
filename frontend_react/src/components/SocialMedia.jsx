import React from 'react'
import { BsTwitter, BsInstagram, BsGithub } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="app__social">
{/*         <div>
            <BsTwitter />
        </div>
        <div>
            <FaFacebookF />
        </div> */}
        <div>
            <a href="https://github.com/Moroco19" target="_blank"><BsGithub /></a>
        </div>
        <div>
            <a href="https://www.instagram.com/morocoisms/" target="_blank"><BsInstagram /></a>
        </div>
    </div>
  )
}

export default SocialMedia