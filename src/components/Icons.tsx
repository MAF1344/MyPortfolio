import {SiGmail, SiGithub} from 'react-icons/si';
import {FaLinkedin} from 'react-icons/fa';

export function GmailIcon({className}: {className?: string}) {
  return <SiGmail className={className} aria-label="Gmail" />;
}

export function GithubIcon({className}: {className?: string}) {
  return <SiGithub className={className} aria-label="GitHub" />;
}

export function LinkedinIcon({className}: {className?: string}) {
  return <FaLinkedin className={className} aria-label="LinkedIn" />;
}
