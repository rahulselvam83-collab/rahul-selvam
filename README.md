# NEXUS Studio V2 starter

Firebase project configured: `nexus-studio-77fe5`.

## Setup before using
1. Firebase Console → Authentication → Sign-in method → enable Email/Password.
2. Firebase Console → Firestore Database → create database.
3. Firestore → Rules: publish the contents of `firestore.rules`.
4. Authentication → Settings → Authorized domains: add `rahulselvam83-collab.github.io`.
5. In Google Cloud Console → APIs & Services → Credentials, restrict the browser API key to `https://rahulselvam83-collab.github.io/*`.
6. Upload all files/folders in this ZIP to the root of the GitHub Pages repository, preserving the `admin` folder.

## Create first admin securely
1. Register an account through `join.html`.
2. Firebase Console → Authentication → Users → copy that account's UID.
3. Firestore → Data → create collection `admins`; create a document whose ID is exactly that UID; add `role` string = `admin`.
4. Admin documents cannot be created from the public website; only create them manually in Firebase Console.

## Pages
- `index.html`: public studio home
- `join.html`: account registration and application
- `status.html`: applicant status
- `admin/login.html` and `admin/dashboard.html`: admin tools

## Notes
This starter implements the application portal and admin application review. Team task management, project editor, contact inbox, file uploads, email verification/reset, and notification delivery are future modules, not implemented yet. Test using a private/incognito browser and test accounts before inviting applicants. Never put service-account credentials in browser files. Firebase web config is public client config; security is enforced by Auth and Firestore rules.
