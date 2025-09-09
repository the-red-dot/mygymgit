/* ==========================================================================
   program-data.js — Data for UPPER/LOWER Tracker (RTL)
   Exposes: window.ProgramData = { FEEL, program }
   ========================================================================== */

// ─── Section A: FEEL constants ───────────────────────────────────────────────
const FEEL = {
  strength: "כבד, כמעט כשל בחזרה האחרונה, טכניקה נקייה (RPE≈9)",
  hyper: "חזרות אחרונות קשות אך נשלטות; נשארות עוד 1–2 במיכל (RPE≈7–8)",
  endurance: "שריפה חזקה ב־2 החזרות האחרונות; כמעט כשל טכני נקי"
};
// ─── End Section A ───────────────────────────────────────────────────────────


// ─── Section B: Program Data (Days, Exercises, Alternatives) ────────────────
const program = [
  {
    id:"sun-lowerA",
    dayLabel:"ראשון – רגליים",
    muscles:"ירך קדמית, ירך אחורית, עכוז, תאומים",
    exercises:[
      {
        id:"back-squat",
        title:"Back Squat / Leg Press",
        active:"Back Squat",
        setsReps:"4×5–8",
        feel: FEEL.strength,
        progress:"4×8 יציב → +2.5–5 ק״ג",
        alts:[
          {kind:"🏋️ חופשי", name:"Back Squat", yt:"Back Squat"},
          {kind:"🎛️ מכשיר", name:"Leg Press Machine", yt:"Leg Press Machine"},
          {kind:"🏋️ חופשי", name:"Goblet Squat", yt:"Goblet Squat"}
        ]
      },
      {
        id:"rdl",
        title:"Romanian Deadlift / Seated Leg Curl",
        active:"Romanian Deadlift",
        setsReps:"3×8–10",
        feel: FEEL.hyper,
        progress:"כשהגעת 10/10/10 חלק → לעלות",
        alts:[
          {kind:"🏋️ חופשי", name:"Romanian Deadlift", yt:"Romanian Deadlift"},
          {kind:"🎛️ מכשיר", name:"Seated Leg Curl Machine", yt:"Seated Leg Curl"},
          {kind:"🎛️ מכשיר", name:"Lying Leg Curl Machine", yt:"Lying Leg Curl"}
        ]
      },
      {
        id:"lunges",
        title:"Walking Lunges / Leg Extension",
        active:"Walking Lunges",
        setsReps:"3×10 לכל רגל / 12–15 במכשיר",
        feel: FEEL.hyper,
        progress:"כשהגעת לטווח העליון בכל הסטים → לעלות",
        alts:[
          {kind:"🏋️ חופשי", name:"Walking Lunges", yt:"Walking Lunges"},
          {kind:"🎛️ מכשיר", name:"Leg Extension Machine", yt:"Leg Extension Machine"},
          {kind:"🏋️ חופשי", name:"Split Squat", yt:"Split Squat"}
        ]
      },
      {
        id:"calf",
        title:"Calf Raises (Standing/Seated)",
        active:"Standing Calf Raises",
        setsReps:"4×12–15",
        feel: FEEL.endurance,
        progress:"קל ב־2 האחרונות? → לעלות מעט",
        alts:[
          {kind:"🏋️ חופשי", name:"Standing Calf Raises", yt:"Standing Calf Raise"},
          {kind:"🎛️ מכשיר", name:"Calf Raise Machine", yt:"Seated Calf Raise"},
          {kind:"🎛️ מכשיר", name:"Leg Press Calf Press", yt:"Leg Press Calf Raise"}
        ]
      }
    ]
  },
  {
    id:"mon-upperA",
    dayLabel:"שני – חזה, גב, כתפיים, ידיים",
    muscles:"חזה, גב רחב/אמצעי, דלתא קדמית/אמצעית, בייספס/טרייספס",
    exercises:[
      {
        id:"bench",
        title:"Bench Press / Chest Press",
        active:"Bench Press",
        setsReps:"4×6–8",
        feel: FEEL.hyper,
        progress:"4×8 יציב → לעלות",
        alts:[
          {kind:"🏋️ חופשי", name:"Barbell Bench Press", yt:"Barbell Bench Press"},
          {kind:"🎛️ מכשיר", name:"Chest Press Machine", yt:"Chest Press Machine"},
          {kind:"🏋️ חופשי", name:"Dumbbell Bench Press", yt:"Dumbbell Bench Press"}
        ]
      },
      {
        id:"pull",
        title:"Pull-Ups / Lat Pulldown",
        active:"Pull-Ups",
        setsReps:"4×8–12 או עד כשל",
        feel:"קרוב לכשל; שליטה מלאה ללא נדנוד",
        progress:"עברת 12 בקלות → הוסף משקל; קשה מדי → Pulldown",
        alts:[
          {kind:"🏋️ חופשי", name:"Pull-Ups", yt:"Pull Ups"},
          {kind:"🎛️ מכשיר", name:"Lat Pulldown Machine", yt:"Lat Pulldown"},
          {kind:"🎛️ מכשיר", name:"Assisted Pull-Up Machine", yt:"Assisted Pull Up Machine"}
        ]
      },
      {
        id:"ohp",
        title:"Overhead Press / Shoulder Press Machine",
        active:"Overhead Press",
        setsReps:"3×6–10",
        feel: FEEL.hyper,
        progress:"3×10 חלק → לעלות",
        alts:[
          {kind:"🏋️ חופשי", name:"Barbell Overhead Press", yt:"Barbell Overhead Press"},
          {kind:"🎛️ מכשיר", name:"Shoulder Press Machine", yt:"Shoulder Press Machine"},
          {kind:"🏋️ חופשי", name:"Dumbbell Shoulder Press", yt:"Dumbbell Shoulder Press"}
        ]
      },
      {
        id:"row-db",
        title:"One-Arm Dumbbell Row / Seated Row",
        active:"One-Arm Dumbbell Row",
        setsReps:"3×8–10",
        feel:"כיווץ בגב, לא משיכה ביד בלבד",
        progress:"3×10 חלק → לעלות",
        alts:[
          {kind:"🏋️ חופשי", name:"One-Arm Dumbbell Row", yt:"One Arm Dumbbell Row"},
          {kind:"🎛️ מכשיר", name:"Seated Row Machine", yt:"Seated Row Machine"},
          {kind:"🏋️ חופשי", name:"Chest Supported Row", yt:"Chest Supported Row"}
        ]
      },
      {
        id:"bi",
        title:"Biceps Curls / Curl Machine",
        active:"Dumbbell Biceps Curls",
        setsReps:"3×10–12",
        feel: FEEL.endurance,
        progress:"קל בסוף? → לעלות מעט",
        alts:[
          {kind:"🏋️ חופשי", name:"Dumbbell Biceps Curls", yt:"Dumbbell Bicep Curl"},
          {kind:"🎛️ מכשיר", name:"Biceps Curl Machine", yt:"Bicep Curl Machine"},
          {kind:"🏋️ חופשי", name:"EZ Bar Curl", yt:"EZ Bar Curl"}
        ]
      },
      {
        id:"tri",
        title:"Dips / Triceps Pushdown",
        active:"Triceps Dips",
        setsReps:"3×10–12",
        feel:"בסוף הסט הידיים רועדות, טווח מלא",
        progress:"מעל 12 בקלות → הוסף משקל/התנגדות",
        alts:[
          {kind:"🏋️ חופשי", name:"Parallel Bar Dips", yt:"Triceps Dips"},
          {kind:"🎛️ מכשיר", name:"Cable Triceps Pushdown", yt:"Triceps Pushdown"},
          {kind:"🎛️ מכשיר", name:"Rope Pushdown", yt:"Rope Pushdown"}
        ]
      }
    ]
  },
  {
    id:"tue-cardio-cond",
    dayLabel:"שלישי – קרדיו + Core & Conditioning",
    muscles:"קרדיו, ליבה, סבולת שריר",
    exercises:[
      {
        id:"cardio-liss",
        title:"קרדיו – LISS",
        active:"הליכה / אופניים / אליפטיקל",
        setsReps:"20–30 דק׳ • דופק 120–140",
        feel:"קצב דיבור בנוח; זיעה קלה",
        progress:"העלה משך או שיפוע/התנגדות בהדרגה כשקל מדי",
        alts:[
          {kind:"🚶 LISS", name:"הליכה (שיפוע קל)", yt:"Incline Walking Treadmill"},
          {kind:"🚴 LISS", name:"אופניים/אופניים נייחים", yt:"Stationary Bike LISS"},
          {kind:"🏃 LISS", name:"אליפטיקל", yt:"Elliptical Trainer LISS"}
        ]
      },
      {
        id:"cardio-hiit",
        title:"קרדיו – HIIT",
        active:"אופניים נייחים / מסילה",
        setsReps:'8–10 ספרינטים × 30״ + 90״ מנוחה',
        feel:"ספרינט חזק אך נשלט; שמור טכניקה",
        progress:"הוסף ספרינט או שפר עוצמה כאשר כל הסטים יציבים",
        alts:[
          {kind:"⚡ HIIT", name:"אופניים נייחים – ספרינטים", yt:"Stationary Bike Sprint Intervals"},
          {kind:"⚡ HIIT", name:"מסילה – ספרינטים", yt:"Treadmill Sprint Intervals"}
        ]
      },
      {
        id:"cond-sq",
        title:"Bodyweight Squats / Leg Press קל",
        active:"Bodyweight Squats",
        setsReps:"3×15–20",
        feel: FEEL.endurance,
        progress:"הגעת 20×3 בקלות → עבר למכשיר קל/הוסף משקל גוף",
        alts:[
          {kind:"🏋️ משקל גוף", name:"Bodyweight Squats", yt:"Bodyweight Squat"},
          {kind:"🎛️ מכשיר", name:"Leg Press Machine (קל)", yt:"Leg Press Machine Light"}
        ]
      },
      {
        id:"cond-push",
        title:"Push-Ups / Chest Press Machine קל",
        active:"Push-Ups",
        setsReps:"3×10–15",
        feel: FEEL.endurance,
        progress:"3×15 יציב → הוסף קושי (גובה/משקל) או עבור למכשיר",
        alts:[
          {kind:"🏋️ משקל גוף", name:"Push-Ups", yt:"Push Up Proper Form"},
          {kind:"🎛️ מכשיר", name:"Chest Press Machine (קל)", yt:"Chest Press Machine Light"}
        ]
      },
      {
        id:"cond-core-plank",
        title:"Plank / Ab Crunch Machine",
        active:"Plank",
        setsReps:"3×30–60 שניות / או 12–15 חזרות במכונה",
        feel:"בטן שורפת; גב ניטרלי",
        progress:"הוסף זמן/התנגדות בהדרגה",
        alts:[
          {kind:"🏋️ משקל גוף", name:"Plank", yt:"Plank Core Exercise"},
          {kind:"🎛️ מכשיר", name:"Ab Crunch Machine", yt:"Ab Crunch Machine"}
        ]
      },
      {
        id:"cond-core-mc",
        title:"Mountain Climbers / Bicycle Crunch Machine (אם יש)",
        active:"Mountain Climbers",
        setsReps:"3×20–30 שניות",
        feel:"דופק עולה; ליבה יציבה",
        progress:"הארך זמן/מהירות כששולט",
        alts:[
          {kind:"🏋️ משקל גוף", name:"Mountain Climbers", yt:"Mountain Climbers"},
          {kind:"🎛️ מכשיר", name:"Bicycle Crunch Machine", yt:"Ab Bicycle Machine"}
        ]
      },
      {
        id:"cond-core-hang",
        title:"Hanging Leg Raises / Captain’s Chair",
        active:"Hanging Leg Raises",
        setsReps:"3×12–15",
        feel:"בטן שורפת 🔥",
        progress:"הוסף משקל/טמפו איטי כשקל",
        alts:[
          {kind:"🏋️ חופשי", name:"Hanging Leg Raises", yt:"Hanging Leg Raise"},
          {kind:"🎛️ מכשיר", name:"Captain’s Chair", yt:"Captains Chair Leg Raise"}
        ]
      }
    ]
  },
  {
    id:"wed-lowerB",
    dayLabel:"רביעי – רגליים + גב תחתון + ליבה",
    muscles:"Hamstrings/Glutes/Core",
    exercises:[
      {
        id:"dl",
        title:"Deadlift / Back Extension",
        active:"Deadlift",
        setsReps:"4×3–6 (מכשיר: 12–15)",
        feel: FEEL.strength,
        progress:"4×6 יציב → +2.5–5 ק״ג",
        alts:[
          {kind:"🏋️ חופשי", name:"Conventional Deadlift", yt:"Deadlift Conventional"},
          {kind:"🎛️ מכשיר", name:"Back Extension Machine", yt:"Back Extension Machine"},
          {kind:"🏋️ חופשי", name:"Trap Bar Deadlift", yt:"Trap Bar Deadlift"}
        ]
      },
      {
        id:"fsq",
        title:"Front Squat / Leg Press",
        active:"Front Squat",
        setsReps:"3×6–8",
        feel: FEEL.hyper,
        progress:"3×8 חלק → לעלות",
        alts:[
          {kind:"🏋️ חופשי", name:"Front Squat", yt:"Front Squat"},
          {kind:"🎛️ מכשיר", name:"Leg Press Machine", yt:"Leg Press Machine"},
          {kind:"🏋️ חופשי", name:"Safety Bar Squat", yt:"Safety Bar Squat"}
        ]
      },
      {
        id:"bul",
        title:"Bulgarian Split Squat / Leg Extension",
        active:"Bulgarian Split Squat",
        setsReps:"3×8–10 לכל רגל / 12–15 מכונה",
        feel: FEEL.hyper,
        progress:"הגעת לטווח העליון → לעלות",
        alts:[
          {kind:"🏋️ חופשי", name:"Bulgarian Split Squat", yt:"Bulgarian Split Squat"},
          {kind:"🎛️ מכשיר", name:"Leg Extension Machine", yt:"Leg Extension Machine"},
          {kind:"🏋️ חופשי", name:"Reverse Lunge", yt:"Reverse Lunge"}
        ]
      },
      {
        id:"hip",
        title:"Hip Thrust / Glute Machine",
        active:"Hip Thrust",
        setsReps:"3×8–12",
        feel:"כיווץ חזק בעכוז; גב ניטרלי",
        progress:"3×12 חלק → לעלות",
        alts:[
          {kind:"🏋️ חופשי", name:"Barbell Hip Thrust", yt:"Barbell Hip Thrust"},
          {kind:"🎛️ מכשיר", name:"Glute Kickback Machine", yt:"Glute Kickback Machine"},
          {kind:"🏋️ חופשי", name:"Glute Bridge", yt:"Glute Bridge"}
        ]
      },
      {
        id:"core",
        title:"Hanging Leg Raises / Ab Crunch Machine",
        active:"Hanging Leg Raises",
        setsReps:"3× עד כשל (או 12–15 במכונה)",
        feel:"בטן שורפת; בלי לקשת את הגב",
        progress:"קל מדי? הוסף משקל/האט טמפו",
        alts:[
          {kind:"🏋️ חופשי", name:"Hanging Leg Raises", yt:"Hanging Leg Raise"},
          {kind:"🎛️ מכשיר", name:"Ab Crunch Machine", yt:"Ab Crunch Machine"},
          {kind:"🏋️ חופשי", name:"Ab Wheel Rollout", yt:"Ab Wheel Rollout"}
        ]
      }
    ]
  },
  {
    id:"thu-upperB",
    dayLabel:"חמישי – חזה, גב, כתפיים (דגש חזה עליון/גב אמצעי)",
    muscles:"Chest Upper, Mid-Back, Lats, Delts",
    exercises:[
      {
        id:"incline",
        title:"Incline Bench / Incline Chest Press",
        active:"Incline Bench Press",
        setsReps:"4×6–8",
        feel: FEEL.hyper,
        progress:"4×8 יציב → לעלות",
        alts:[
          {kind:"🏋️ חופשי", name:"Incline Barbell Bench Press", yt:"Incline Bench Press"},
          {kind:"🎛️ מכשיר", name:"Incline Chest Press Machine", yt:"Incline Chest Press Machine"},
          {kind:"🏋️ חופשי", name:"Incline Dumbbell Press", yt:"Incline Dumbbell Press"}
        ]
      },
      {
        id:"row-bb",
        title:"Barbell Row / Seated Row",
        active:"Barbell Row",
        setsReps:"4×8–10",
        feel:"גב מתכווץ; לא 'לזרוק' את המשקל",
        progress:"4×10 חלק → לעלות",
        alts:[
          {kind:"🏋️ חופשי", name:"Barbell Row", yt:"Barbell Row"},
          {kind:"🎛️ מכשיר", name:"Seated Row Machine", yt:"Seated Row Machine"},
          {kind:"🏋️ חופשי", name:"T-Bar Row", yt:"T Bar Row"}
        ]
      },
      {
        id:"sp",
        title:"DB Shoulder Press / Shoulder Machine",
        active:"Dumbbell Shoulder Press",
        setsReps:"3×8–10",
        feel: FEEL.hyper,
        progress:"3×10 חלק → לעלות",
        alts:[
          {kind:"🏋️ חופשי", name:"Dumbbell Shoulder Press", yt:"Dumbbell Shoulder Press"},
          {kind:"🎛️ מכשיר", name:"Shoulder Press Machine", yt:"Shoulder Press Machine"},
          {kind:"🏋️ חופשי", name:"Arnold Press", yt:"Arnold Press"}
        ]
      },
      {
        id:"lat",
        title:"Lat Pulldown / Pull-Ups",
        active:"Lat Pulldown",
        setsReps:"3×10–12",
        feel:"קרוב לכשל; שליטה מלאה",
        progress:"מעל 12 קל → לעלות נגד",
        alts:[
          {kind:"🎛️ מכשיר", name:"Lat Pulldown Machine", yt:"Lat Pulldown"},
          {kind:"🏋️ חופשי", name:"Pull-Ups", yt:"Pull Ups"},
          {kind:"🎛️ מכשיר", name:"Assisted Pull-Up Machine", yt:"Assisted Pull Up Machine"}
        ]
      },
      {
        id:"lat-raise",
        title:"Lateral Raises / Lateral Machine",
        active:"Dumbbell Lateral Raises",
        setsReps:"3×12–15",
        feel: FEEL.endurance,
        progress:"קל בסוף? → לעלות מעט",
        alts:[
          {kind:"🏋️ חופשי", name:"Dumbbell Lateral Raise", yt:"Dumbbell Lateral Raise"},
          {kind:"🎛️ מכשיר", name:"Lateral Raise Machine", yt:"Lateral Raise Machine"},
          {kind:"🎛️ מכשיר", name:"Cable Lateral Raise", yt:"Cable Lateral Raise"}
        ]
      },
      {
        id:"facepull",
        title:"Face Pulls (Pulley)",
        active:"Face Pulls",
        setsReps:"3×12–15",
        feel:"אחורי כתף ושכמות; מרפקים החוצה",
        progress:"לעלות התנגדות כשקל",
        alts:[
          {kind:"🎛️ פולי", name:"Face Pull (Rope)", yt:"Face Pull Rope"},
          {kind:"🎛️ פולי", name:"Face Pull (Bar)", yt:"Face Pull Bar"},
          {kind:"🎛️ פולי", name:"High-to-Low Face Pull", yt:"High to Low Face Pull"}
        ]
      }
    ]
  }
];
// ─── End Section B ───────────────────────────────────────────────────────────


/* ─── Section C: Export to global (no module bundler required) ───────────── */
window.ProgramData = { FEEL, program };
// Notify listeners that data is ready (app.js waits on this defensively)
try { window.dispatchEvent(new Event("ProgramDataReady")); } catch(_) {}
/* ─── End Section C ──────────────────────────────────────────────────────── */

