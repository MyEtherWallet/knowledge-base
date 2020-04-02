# MyEtherWallet Knowledge Base

This is the repository for the MyEtherWallet knowledge base.

Live site can be found [here][1].

### Quick Start Guide

 Start by ensuring you have Node installed:

-   Install [Node.js][2] if you have not already.
-   `git clone https://github.com/MyEtherWallet/knowledge-base.git` to clone the repo
-   `cd knowledge-base-v5` to enter the project directory

    Once you are in the project directory, run the following commands:
-   `npm install` to pull all dependencies.
-   `npm run build` to create a production version of the site.
-   `npm start` to develop locally.

    The site should now be available at: [localhost:4000][4]

## Contributing

From adding an issue for a documentation suggestion to creating a pull request: all feedback is appreciated and welcome. If you're planning to implement a new section or
page please create an issue first.

### Setup

 Start by ensuring you have Node installed and forking the repository:

-   Install [Node.js][2] if you have not already.
-   Fork the **knowledge-base-v5** repo from [the main repository][3].
-   `git clone <your-clone-url> && cd knowledge-base-v5`

    Once you are in the project directory, run the following commands:
-   `npm install` to pull all dependencies.
-   `npm run build` to create a production version of the site.
-   `npm start` to develop locally: [localhost:4000][4].

    > Note that **Node 6.9.x** or above is required for the build process to run properly.

    ### Branching Your Changes

    Making a branch in your fork for your contribution is helpful in the following ways:
-   It allows you to have multiple contributions in as PRs at once.
-   It allows us to identify what your contribution is about from the branch name.

    ## Committing Your Changes

    Please provide a short and concise commit message. For example, for documentation
    changes, a short commit message may resemble the following:

    ```md
    clarify Keystore/JSON  usage in How_To_Access_Your_Wallet.md
    ```

    ### Submitting Changes

    After getting some feedback, push to your fork branch and submit a pull request. We may
    suggest some changes or improvements or alternatives, but for small changes your pull
    request should be accepted and merged fairly quick.

    Issue the PR to the [master][5] branch.

    > ## See [GitHub documentation][6] for more help.

    Built using [Hexo][7]

[1]: https://kb.myetherwallet.com/

[2]: https://nodejs.org/

[3]: https://github.com/MyEtherWallet/knowledge-base

[4]: http://localhost:4000/

[5]: https://github.com/MyEtherWallet/knowledge-base/tree/master

[6]: https://help.github.com/articles/proposing-changes-to-your-work-with-pull-requests/

[7]: https://hexo.io/
