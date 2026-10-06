# Green Sparrow: Firebase setup (10 steps)

1. console.firebase.google.com > Add project > name it "green-sparrow" (Analytics optional).
2. Build > Firestore Database > Create database > Production mode > region **asia-south1 (Mumbai)**.
3. Build > Authentication > Get started > Sign-in method > enable **Email/Password**.
4. Authentication > Users > Add user: your admin email + password. Copy that user's **UID**.
5. Firestore > Start collection `admins` > Document ID = the UID from step 4 > add field `role` (string) = `admin`.
6. Firestore > Rules tab > paste everything from `firestore.rules` > Publish.
7. Project settings (gear) > Your apps > Web `</>` > register app > copy the `firebaseConfig` values into `firebase-config.js`.
8. Authentication > Settings > Authorized domains > add your live domain (e.g. greensparrow.in).
9. Upload the whole folder to your hosting (or Firebase Hosting: `firebase init hosting` > `firebase deploy`).
10. Test: submit a form on the site, then open `/admin/login.html`, sign in, and watch it appear live.

Collections created automatically on first submit: enquiries, consultations, messages, subscribers.
