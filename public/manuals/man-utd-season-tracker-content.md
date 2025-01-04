# **Man United Season Tracker**

![Man United Season Tracker Logo](/img/manutd-tracker-logo.png)

## Landing Page

![Landing Page Overview](/man-utd-tracker-images/landing-page-overview.png)

The landing page presents a comprehensive overview of Manchester United's latest match information and team statistics. At the top of the page, users will find a navigation bar featuring the Manchester United logo and team name, alongside options for "Home" and "Browse Matches." A login button is conveniently positioned in the top-right corner.

The page is dominated by three main sections:

### Latest Match

![Latest Match Section](/man-utd-tracker-images/latest-match-card.png)

This section displays the most recent match details, featuring a match card that shows:
- The fixture: Manchester United vs Manchester City
- The date: December 15, 2024
- The score: 2-1
- The venue: Etihad Stadium
- A prominent "View Details" button for accessing more comprehensive match information
- A featured image showcasing match action or player imagery

### Quick Stats

![Quick Stats Section](/man-utd-tracker-images/quick-stats.png)

This section provides essential match statistics, including:
- Possession: 48.0%
- Shots: 10 (3 on target)
- Pass Accuracy: 88.0%

### Formation

![Formation Display](/man-utd-tracker-images/formation-display.png)

This section presents the team's tactical setup, displaying:
- The current formation being played (3-4-3)
- A visual representation of player positions on a football pitch
- Individual player names and their respective shirt numbers

## Browse Matches

![Browse Matches Page](/man-utd-tracker-images/browse-matches-overview.png)

The Browse Matches page provides a comprehensive view of Manchester United's match history. At the top of the page, the title "Match History" clearly indicates the section's purpose. Below this, matches are displayed in a grid layout with six matches per page.

Each match is presented in a card format that contains:
- A match image showing a key moment from the game
- The match title (Manchester United vs Opponent)
- The match date
- The final score, highlighted in green for wins and red for losses
- The venue where the match was played
- The formation used in the match
- The possession percentage
- A "View Details" button for accessing comprehensive match information

The page includes pagination controls at the bottom, allowing users to navigate through all recorded matches. Users can move through pages using numbered links, with options for Next and Previous navigation.

### Match Details View

![Match Details Page](/man-utd-tracker-images/match-details-view.gif)

The Match Details page provides comprehensive information about individual matches, presenting data in a clear, organized layout that helps users understand the full context of each game.

At the top of the page, users see the match's featured image spanning the full width of the content area. If no image is available, the system displays a placeholder with appropriate messaging. Below the image, the page presents the match title showing "Manchester United vs [Opponent]" along with the match date.

The content is organized into several key sections:

The Match Details section provides essential information about the fixture, including:
- The final score, color-coded to indicate a win (green), loss (red), or draw
- The venue where the match was played
- The tactical formation employed by the team

Adjacent to this, the Match Stats section presents a detailed statistical breakdown of the team's performance through an organized table showing:
- Ball possession percentage
- Shot statistics, including both total shots and those on target
- Passing metrics, displaying total passes and completion accuracy
- Disciplinary information, including yellow and red cards
- Set piece statistics covering corners and offsides
- Total fouls committed

Below these statistics, users find a Match Description section that provides a narrative account of the game's key moments and overall flow.

The lower section of the page is divided between the Formation display and the Substitutes list. The Formation section visualizes the team's tactical setup, while the Substitutes section lists both the players who participated in the match and those who remained unused.

For easy navigation, the page includes a "Back to Browse" button that returns users to the match listing page. This button features an arrow icon to clearly indicate its function as a navigation element.

## Admin Login

![Admin Login Page](/man-utd-tracker-images/admin-login.png)

The Admin Login page provides secure access to the administrative features of the Man United Season Tracker. The page presents a clean, centered login form with the following elements:

### Login Form Components

![Login Form](/man-utd-tracker-images/login-form.png)

The login interface consists of a straightforward form where administrators can input their credentials:

- A username field for entering the admin username
- A password field that securely masks the entered password
- A login button styled in the application's signature red color

If incorrect credentials are entered, the system displays an error message prompting the user to check their username and password.

Upon successful authentication, administrators are automatically redirected to the admin dashboard where they can manage match data and other system settings.

The login page maintains the consistent navigation header featuring the Manchester United logo, Home and Browse Matches links, while adding the fullscreen toggle instruction for enhanced viewing options.

## Admin Dashboard

![Admin Dashboard](/man-utd-tracker-images/admin-dashboard.png)

The Admin Dashboard serves as the central management interface for authorized administrators. Upon successful login, administrators are presented with a comprehensive view of all match records and management tools.

### Dashboard Header
At the top of the dashboard, administrators will find:
- A clear "Admin Dashboard" title
- An "Add New Match" button for creating new match entries
- A "Logout" button to securely end the admin session

### Match Records Table
The dashboard presents match data in a structured table format with the following columns:

- Image: Displays a thumbnail of the match photo, which can be clicked to view the full-size image
- Date: Shows the date the match was played
- Opponent: Lists the opposing team name
- Score: Displays the final match score (Manchester United - Opponent)
- Added By: Shows which administrator added the record
- Last Edited: Displays the date and time of the most recent edit
- Actions: Provides Edit and Delete buttons for managing each match record

### Navigation and Controls
The interface maintains consistent access to:
- The Manchester United logo and team branding
- Navigation links for Home and Browse Matches
- A fullscreen toggle option
- Table pagination controls for browsing through multiple pages of match records

Each match entry can be managed through the "Edit" and "Delete" buttons in the Actions column, allowing administrators to maintain and update match information as needed.

## Add New Match

![Add New Match Form](/man-utd-tracker-images/add-match-form.gif)

The Add New Match interface provides administrators with a comprehensive data entry system for recording match details. The system combines an intuitive user interface with robust data validation and storage capabilities.

### Match Media and Basic Information

The form begins with essential match details. Administrators can upload a match image, which undergoes automatic processing to create both a full-size version and a thumbnail for efficient display. The system supports common image formats (JPG, PNG, WebP) and enforces a 2MB size limit to maintain optimal performance.

The basic match information section captures fundamental game details:

- A date selector for recording when the match was played
- Fields for documenting the opponent team and venue
- The tactical formation employed in the match
- The final score for both Manchester United and their opponent

### Team Composition

The formation and lineup section enables detailed documentation of team structure. Administrators input both the tactical setup and player details, with the system validating that all positions are properly filled. The interface accommodates standard football formations, requiring one goalkeeper and ten outfield players.

For tracking player changes during the match, the substitutes section is divided between used and unused substitutes. Each substitute entry captures both the player's number and name, maintaining a complete record of the match day squad.

### Performance Metrics

The system collects comprehensive match statistics that provide detailed insights into team performance:

The statistical tracking includes possession percentages, shooting accuracy, passing effectiveness, and disciplinary records. Each metric is validated to ensure data integrity:

- Possession and pass accuracy must be entered as percentages between 0 and 100
- Shot statistics track both total attempts and those on target
- A complete record of passes attempted and completed
- Disciplinary data including fouls, cards, and offsides

### Record Management

When a match record is created, the system automatically captures:

- The administrator who added the record
- The timestamp of creation
- All match statistics and performance data
- The complete team lineup and substitution information

The data is securely stored in the database with proper validation and error handling. Administrators can later access these records for editing or analysis through the admin dashboard.

The interface includes clear submission controls, with an "Add Match" button to save the record and a "Cancel" option to abandon the entry without saving. Upon successful submission, administrators are returned to the match listing page where they can view the newly added record in context with other matches.

## Edit Match

![Edit Match Form](/man-utd-tracker-images/edit-match-form.gif)

The Edit Match interface provides administrators with the ability to modify existing match records in the system. The interface presents a comprehensive form that displays the current match information and allows for efficient updates.

When accessing the edit interface, administrators will see the current match details pre-populated in the form. At the top of the form, the current match image is prominently displayed, giving administrators immediate visual context for the record they are modifying. The image section includes the option to upload a new image while maintaining clear guidelines about file requirements - JPG, PNG, or WebP formats with a 2MB size limit. Administrators can leave this field empty to retain the existing image.

The match details section follows, where administrators can modify the fundamental match information. The date field displays the current match date, which can be adjusted using a calendar picker. Adjacent fields allow for updates to the opponent team name and venue information. The formation field maintains the team's tactical setup, requiring standard football notation patterns such as "3-4-2-1" or "4-4-2".

For match outcomes, the interface displays the current scores for both Manchester United and their opponent, which can be adjusted as needed. The formation and lineup section retains the current team composition while allowing for modifications to both player numbers and names. The system maintains validation to ensure proper team structure, including verification that the formation includes exactly ten outfield players plus a goalkeeper.

The substitutes section preserves the current match's substitution records while providing the flexibility to add or remove both used and unused substitutes. Each substitute entry maintains the player's number and name, with the ability to dynamically add new entries or remove existing ones as needed.

Match statistics can be refined through a comprehensive set of input fields, including:
- Ball possession percentage
- Shot statistics
- Passing metrics
- Disciplinary records
- Set piece statistics

Throughout the editing process, the system maintains data integrity through rigorous validation, ensuring that all updates meet the required format and logical constraints before being saved to the database.

## Deleting Match Records

![Delete Match Confirmation](/man-utd-tracker-images/delete-match.gif)

The deletion process includes a careful confirmation system to prevent accidental data loss. When an administrator clicks the "Delete" button for a match record, they are presented with a confirmation screen that:

- Displays a clear warning message about the permanence of deletion
- Shows key match details for verification, including:
  - The opponent team name
  - The match date
  - The final score

The confirmation screen requires explicit administrator action through a dedicated "Delete Match" button. For additional safety, a "Cancel" option allows administrators to return to the dashboard without proceeding with deletion.

When confirmed, the system:
- Removes the match record from the database
- Deletes associated match images from the server
- Returns the administrator to the updated dashboard

This structured approach to match management ensures that administrators can maintain accurate records while protecting against unintended data loss. The interface combines efficient access to match data with secure management controls, supporting the overall integrity of the Manchester United Season Tracker system.

© 2024 Man United Season Tracker - Academic Project