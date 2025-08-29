

### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2.---> ১.কোন একটি নিদিষ্ট  tag কে খুজতে getElementById ব্যবহার করা হয়।
২.আমরা যদি কযেকটি নিদিষ্ট tag কে খুজতে যাই, তাহলে class দিয়ে খুজে বের করতে পারি।
৩.querySelector শুধু প্রথমে ১টি যে span কে পাবে, শুধু তাকেই ধরে রিটার্ন করবে।
৪.querySelectorAll  সবগুলো একই মিল থাকা class ধরে নিয়ে এসে রিটার্ন করে।


3. How do you **create and insert a new element into the DOM**?
4.---> DOM-এ একটি নতুন উপাদান তৈরি এবং সন্নিবেশ করার জন্য
document.createElement() ব্যবহার করে একটি নতুন HTML এলিমেন্ট তৈরি করা হয় এবং বিদ্যমান কোনো উপাদান (parent) এর ভিতরে .append() এর মাধ্যমে নতুন উপাদানটি যুক্ত করে


5. What is **Event Bubbling** and how does it work?
6. ---> Event Bubbling হলো যখন যখন chaild থেকে event টি উপরে দিকে যায়,,,,মানে chaild	> parent > html উপরে দিকে যায়


7. What is **Event Delegation** in JavaScript? Why is it useful?
8. --->Event Delegation এর মাধ্যমে আমরা child element এর জন্য সরাসরি event বসানোর বদলে,  parent  element বসিয়ে Event Bubbling এর মাধ্যমে child event গুলো ধরা যায়।



9. What is the difference between **preventDefault() and stopPropagation()** methods?


