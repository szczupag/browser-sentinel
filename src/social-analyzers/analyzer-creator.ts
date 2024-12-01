import { UGCAnalyzer } from './base/UGCAnalyzer';
import { TwitterAnalyzer, RedditAnalyzer } from './platforms';

export function createSocialAnalyzer(hostname: string): UGCAnalyzer | null {
  console.log('Creating social analyzer for hostname:', hostname);
  switch (hostname) {
    case 'x.com':
    case 'twitter.com':
      return new TwitterAnalyzer();
    case 'reddit.com':
      return new RedditAnalyzer();
    default:
      return null;
  }
}