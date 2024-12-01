import { UGCAnalyzer } from '../base/UGCAnalyzer';

export class TwitterAnalyzer extends UGCAnalyzer {
  constructor() {
    super({
      platform: 'Twitter',
      minLength: 100,
      preAnalysisPrompt: `You are a security expert analyzing tweets for potential threats. The text you are analyzing is definitely user generated content. So in the output make sure isUGC is set to true
In twitter the source's credibility is not easy to assert so skip that as well as Impersonation checks even if mentioned in the instructions below.
Inappropriate, disrespectful, hate speech content while distasteful to the user should not be flagged under no circustances.`,
      selectors: {
        content: '[data-testid="tweetText"]',
        contentRoot: 'main'
      }
    });
  }
}