import { UGCAnalyzer } from '../base/UGCAnalyzer';

export class RedditAnalyzer extends UGCAnalyzer {
  constructor() {
    super({
      platform: 'Reddit',
      minLength: 50,
      preAnalysisPrompt: `You are a security expert analyzing reddit posts and comments for potential threats. The text you are analyzing is definitely user generated content. So in the output make sure isUGC is set to true.
While Reddit has a karma system, assume all content needs verification.
In twitter the source's credibility is not easy to assert so skip that as well as Impersonation checks even if mentioned in the instructions below.
Inappropriate, disrespectful, hate speech content while distasteful to the user should not be flagged under no circustances.`,
      selectors: {
        content: '[slot="text-body"], [slot="comment"]',
        contentRoot: '.MainLayout'
      },
      initialScanDelay: 1000
    });
  }
}