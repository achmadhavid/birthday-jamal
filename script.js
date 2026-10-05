/* =====================================================
   MUSIC
===================================================== */

const music = document.getElementById("bgMusic");

const musicButton = document.getElementById("musicButton");

/* =====================================================
   PAGE NAVIGATION
===================================================== */

function showPage(pageId) {
  const pages = document.querySelectorAll(".page");

  pages.forEach(function (page) {
    page.classList.remove("active");
  });

  const target = document.getElementById(pageId);

  target.classList.add("active");

  window.scrollTo({
    top: 0,

    behavior: "smooth",
  });
}

/* =====================================================
   OPEN BIRTHDAY
===================================================== */

function openBirthday() {
  showPage("birthday");

  // Start music

  music.volume = 0.5;

  music.play().catch(function (error) {
    console.log("Browser membutuhkan interaksi pengguna.");
  });

  createFloatingHearts();
}

/* =====================================================
   MUSIC CONTROL
===================================================== */

function toggleMusic() {
  if (music.paused) {
    music.play();

    musicButton.innerHTML = "🎵";
  } else {
    music.pause();

    musicButton.innerHTML = "🔇";
  }
}

/* =====================================================
   MEMORIES
===================================================== */

function goToMemories() {
  showPage("memories");

  createFloatingHearts();
}

/* =====================================================
   LETTER
===================================================== */

function goToLetter() {
  showPage("letter");

  startTyping();
}

/* =====================================================
   TYPING EFFECT
===================================================== */

const letterText = `Dear Jamal,

Happy Birthday! 🎂❤️

Semoga di umur yang baru ini,
kamu selalu dikelilingi kebahagiaan,
kesehatan, rezeki,
dan orang-orang yang tulus menyayangimu.

May all your dreams come true,
may your days be brighter,
and may you always have
a reason to smile. ✨

Honestly...

I'm really happy that I got
the chance to know you
and become a little closer to you.

Somehow, talking to you
has become one of my favorite
parts of the day. 🤍

I don't know what the future
will look like...

But I hope I can still be
one of the people
who makes you smile.

Happy Birthday once again,
Jamal. ❤️`;

let typingStarted = false;

function startTyping() {
  if (typingStarted) {
    return;
  }

  typingStarted = true;

  const typingElement = document.getElementById("typingText");

  const button = document.getElementById("letterButton");

  let index = 0;

  function typeCharacter() {
    if (index < letterText.length) {
      typingElement.textContent += letterText.charAt(index);

      index++;

      setTimeout(typeCharacter, 35);
    } else {
      button.classList.add("show");
    }
  }

  typeCharacter();
}

/* =====================================================
   QUESTION
===================================================== */

function goToQuestion() {
  showPage("question");
}

/* =====================================================
   CONFESSION
===================================================== */

function showConfession() {
  showPage("confession");

  createFloatingHearts();
}

/* =====================================================
   FINAL
===================================================== */

function finishBirthday() {
  showPage("final");

  createConfetti();

  createFloatingHearts();
}

/* =====================================================
   FLOATING HEARTS
===================================================== */

function createFloatingHearts() {
  const heartSymbols = ["❤️", "💕", "💗", "💖", "💘"];

  for (let i = 0; i < 15; i++) {
    const heart = document.createElement("div");

    heart.classList.add("floating-heart");

    heart.textContent =
      heartSymbols[Math.floor(Math.random() * heartSymbols.length)];

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize = Math.random() * 20 + 15 + "px";

    document.body.appendChild(heart);

    const duration = Math.random() * 3000 + 4000;

    heart.animate(
      [
        {
          transform: "translateY(0) rotate(0deg)",

          opacity: 1,
        },

        {
          transform: `translateY(-${window.innerHeight + 100}px)
                         rotate(360deg)`,

          opacity: 0,
        },
      ],

      {
        duration: duration,

        easing: "linear",
      }
    );

    setTimeout(
      function () {
        heart.remove();
      },

      duration
    );
  }
}

/* =====================================================
   CONFETTI
===================================================== */

function createConfetti() {
  const symbols = ["🎉", "✨", "💖", "💕", "🎊", "❤️"];

  for (let i = 0; i < 40; i++) {
    const confetti = document.createElement("div");

    confetti.style.position = "fixed";

    confetti.style.left = Math.random() * 100 + "%";

    confetti.style.top = "-30px";

    confetti.style.fontSize = Math.random() * 15 + 15 + "px";

    confetti.style.zIndex = "9999";

    confetti.style.pointerEvents = "none";

    confetti.textContent = symbols[Math.floor(Math.random() * symbols.length)];

    document.body.appendChild(confetti);

    const duration = Math.random() * 3000 + 2000;

    confetti.animate(
      [
        {
          transform: "translateY(0) rotate(0deg)",

          opacity: 1,
        },

        {
          transform: `translateY(${window.innerHeight + 100}px)
                         rotate(720deg)`,

          opacity: 0,
        },
      ],

      {
        duration: duration,

        easing: "ease-in",
      }
    );

    setTimeout(
      function () {
        confetti.remove();
      },

      duration
    );
  }
}

/* =====================================================
   RESTART
===================================================== */

function restartWebsite() {
  location.reload();
}
