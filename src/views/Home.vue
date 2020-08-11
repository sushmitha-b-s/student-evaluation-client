<template>
  <div>
    <section class="intro">
      <div class="intro__container">
        <h2 class="text-h2 font-weight-bold pb-5">Preview. Manage. Evaluate.</h2>
        <p
          class="pb-3"
        >The student Evaluation tool is an optimal workflow for teachers to manage classes, students, and their evaluations all in one place. Track each student's performance by evaluating on their day-to-day basis.</p>
        <div>
          <v-btn depressed large color="secondary" elevation="7" @click="go">
            <span>Get started</span>
          </v-btn>

          <a href="#features" class="text-decoration-none">
            <v-btn depressed large color="white" elevation="7" class="ml-6">
              <span>features</span>
            </v-btn>
          </a>
        </div>
      </div>

      <figure class="intro__image">
        <img src="@/assets/grades.svg" alt="Student Evaluation Tool" />
      </figure>
    </section>

    <section id="features">
      <header class="text-h2 font-weight-regular py-16 text-center">
        <span>Features</span>
      </header>

      <section class="features__list">
        <div class="feature__item">
          <v-icon color="black" large>mdi-check-circle</v-icon>
          <h4 class="text-h5">Information at a glance</h4>
          <p>No more difficulty using the spreadsheet. Store the details of every class, students, and their evaluations. Registered users can see the complete list of classes, students, and their evaluations.</p>
        </div>

        <div class="feature__item">
          <v-icon color="black" large>mdi-briefcase</v-icon>
          <h4 class="text-h5">Easy workflow</h4>
          <p>Registered users can create and delete the batches. They can also create new students, edit their details, and delete them. Evaluations can be monitored by adding new ones or by deleting it.</p>
        </div>

        <div class="feature__item">
          <v-icon color="black" large>mdi-format-list-text</v-icon>
          <h4 class="text-h5">Flexible assessment</h4>
          <p>
            Evaluate a student based on their daily basis by using red, yellow, and green colors. RED indicates
            <strong>all good and on track</strong>, YELLOW indicates
            <strong>slightly off-track</strong> and GREEN indicates
            <strong>needs extra attention</strong>.
          </p>
        </div>

        <div class="feature__item">
          <v-icon color="black" large>mdi-decagram</v-icon>
          <h4 class="text-h5">Track the performance easily</h4>
          <p>Teachers can make use of the progress bar shown in the student's overview which represents the percentage of students evaluated by RED, YELLOW, or GREEN based on their latest performance.</p>
        </div>

        <div class="feature__item">
          <v-icon color="black" large>mdi-firework</v-icon>
          <h4 class="text-h5">Less work</h4>
          <p>
            No more difficulty choosing a student for asking a question. This tool helps teachers to pick a student randomly based on their latest performance. Students with RED have a 50% chance, YELLOW with a 33% chance and, GREEN with a 17% chance (secret algorithm
            <v-icon>mdi-emoticon-wink-outline</v-icon>).
          </p>
        </div>
      </section>
    </section>

    <footer class="black white--text py-10 d-flex justify-space-around">
      <span>Copyright © 2020 sushmitha BS. All rights reserved.</span>
      <a href="https://github.com/sushmitha-b-s/student-evaluation-client" target="_blank">
        <span class="white--text">To check the code, please visit my</span>
        <v-icon color="white" right>mdi-github</v-icon>
      </a>
      <a href="https://www.linkedin.com/in/sushmitha-b-s/" target="_blank">
        <v-icon color="white" right>mdi-linkedin</v-icon>
      </a>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    go() {
      const user = localStorage.getItem("user");
      if (user) {
        this.$router.push({ name: "classes" });
      } else {
        this.$router.push({ name: "login" });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.intro {
  height: 90vh;
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .intro__container {
    p {
      line-height: 1.7;
    }
  }
}

#features {
  background-color: #fff;
  padding: 0.5rem;

  .features__list {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: baseline;
    flex: 1 1;
    padding-bottom: 5em;

    .feature__item {
      padding: 0 1rem 2rem;

      h4 {
        margin: 3px 0 8px;
      }

      p {
        max-width: 260px;
        line-height: 1.7;
        color: #666666;
      }
    }
  }
}
</style>