Cross-platform Mobile Development
Real Work Assignment

About this Assignment
Most people today have come to consume the Internet on their mobile devices. Due to this, there has been an explosion of apps that run natively on popular platforms (iOS, Android) that make the experience smoother and richer than just a simple web single-page app.

In this assessment, you will design and implement a key feature of our "TeachTap" React Native application. We aim to gauge your expertise in creating user-friendly, robust, and efficient mobile applications, keeping in mind the expectations of today's dynamic user base.

Business Background
In the age of technology-driven education, platforms that merge entertainment with learning gain tremendous traction. TeachTap aims to be a pioneer in this space, offering users bite-sized educational content in an engaging format, reminiscent of TikTok.
Requirement: Users should have a seamless experience when navigating and consuming content.
Requirement: The app must match our design, closely following the TikTok “formula”.

At the heart of the app's user experience is the "For You" section on the “Home” screen. This screen offers a seamless stream of fresh content at the fingertips of our users, encouraging continued exploration and engagement.

Problem Statement
Requirement: As a user, I want to get an endless stream of relevant multiple-choice questions, such that I can validate my knowledge in select areas.

UX Design: Figma prototype.

In scope:
Showing content for the “For you” section of the “Home” screen,
Displaying the Multiple Choice Questions (MCQs) in this section,
Revealing the correct answer when the user taps one choice of an MCQ,
Showing the content’s author name (e.g., “AP US History”), playlist, avatar, and content description,
Browsing through content in an infinite scroll fashion (like TikTok),
Measuring the time the user spent in the app using a countdown timer at the top left.

Not in scope:
Persisting state changes (e.g., the selected choice for MCQs) to an API,
Clicking Like, Comment, Share, and Bookmark buttons (just show them as static icons),
Clicking into User Profile, Search, or into the Playlist (just show as static icons/text),
Any of the other sections of the app except Home (Discover, Activity, Bookmarks, Profile; just show some placeholder).

API endpoints:
Retrieve MCQs: GET https://cross-platform.rp.devfactory.com/for_you
Returns the next content item for the user’s For You section.
Reveal answer - GET https://cross-platform.rp.devfactory.com/reveal?id=X
Reveals the correct answer for an MCQ question with id = X.

Your Work
Follow the README of the starter code to get it running.
Please do not fork this repository or create a fresh GitHub repository out of it.
We recommend using Gitpod to quickly set up your development environment.
Implement the user requirements described above, while following the quality bar listed below.
Create a local commit with your changes and follow the README instructions to create a git patch from your local repository to share your work.
Record a demo video (maximum 5 minutes) in which you show the app features you have implemented.
We recommend using Loom as it is free, easy to set up, and works on all platforms.

Grading
Your submission will be evaluated based on the following quality bar.
Completeness: Evaluate the functionality of the final code and its alignment with the desired output. High-quality submissions will include code that fully meets the functional requirements and evidence that the solution works as designed, provided through a demo video.
Consistency: Asses adherence to the given UI/UX design and the overall user experience consistency. High-quality submissions will include a UI that closely follows the provided design and ensures a smooth and consistent user experience (e.g., scrolling is smooth and uninterrupted, and users can scroll back to content loaded previously in the same session and see their answers).
Technology: Evaluate the adherence to the technical constraints (i.e., usage of React Native & TypeScript) and to the industry standards related to these technologies. High-quality submissions will use React Native and standard patterns for managing state, calling APIs, handling navigation, recovering from errors, etc.
Clean Code: Gauge the code's cleanliness, efficiency, consistency, and adherence to best practices. High-quality submissions will respect clean coding standards, and SOLID/DRY principles, and will not include unused code and/or compilation errors/warnings.

React Native Assessment
This repository contains the scaffolding for creating a cross-platform application for the React Native assessment. For convenience, the icons required for this assessment are included in the assets folder.

You have two options for writing code for this assessment: Gitpod (recommended) or local (will require up to 60 minutes of set-up time). Using you local machine will allow you to use a local emulator/simulator, whereas for the Gitpod environment, you will need to use your physical mobile device to test the app.

Running in Gitpod
You can sign up for a free Gitpod account here: https://www.gitpod.io/ using your GitHub account. After you sign up, you can open the following link to launch your environment: https://www.gitpod.io/#https://github.com/trilogy-group/ws-eng-react-native-assessment

Once the environment spins up, you'll have a browser-based VSCode at your disposal. A terminal task is launched automatically, which installs dependencies and starts Expo.

Once Expo has spun up, it will display a QR code. Install the "Expo Go" app on your Android/iOS mobile device and scan the QR code to open your app. When you make changes, you can press "r" in the terminal to refresh the app on your device.

If you are inactive for a while, your Workspace will be "paused". All file changes that you have made to the repository will be saved. You can resume it by refreshing the link or by going here: https://gitpod.io/workspaces.

Running Locally
You will need to:

Install NodeJS 20 on your local machine,
Install the dependencies of this project: npm ci,
Start the application: npm start,
Follow the expo documentation to run the app on an Android emulator or iOS simulator.
Exporting your Changes
If the assessment you are working on asks for a git patch, you must export a git diff of your changes by running the ./create-patch.sh script provided in this repository. This will create a patch in the current folder. Open it to ensure that all your changes are present (it's just a text file). On Gitpod, you can right-click to download it.
