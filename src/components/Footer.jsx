import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';

const Footer = () => {
  return (
    [
      { icon: FaTwitter, color: '#1DA1F2', link: '#' },
      { icon: FaFacebook, color: '#1877F2', link: '#' },
      { icon: FaInstagram, color: '#E4405F', link: '#' },
    ]
  )
};

export default Footer;
