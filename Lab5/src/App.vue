<template>
  <Toast />

  <HeaderSection />
  <HeroSection />
  <ProblemSolution />
  <BenefitsSection />
  <HowItWorks />
  <PricingSection />
  <ReviewsSection />
  <FAQSection />
  <ContactForm />

  <footer class="footer">© 2025 ManagerHelp Product</footer>
</template>

<script setup>
import HeaderSection from './components/HeaderSection.vue'
import HeroSection from './components/HeroSection.vue'
import ProblemSolution from './components/ProblemSolution.vue'
import BenefitsSection from './components/BenefitsSection.vue'
import HowItWorks from './components/HowItWorks.vue'
import PricingSection from './components/PricingSection.vue'
import ReviewsSection from './components/ReviewsSection.vue'
import FAQSection from './components/FAQSection.vue'
import ContactForm from './components/ContactForm.vue'

import Toast from 'primevue/toast'
</script>

<style>
.footer {
  text-align: center;
  padding: 30px;
  background: #f5f5f5;
  margin-top: 40px;
}
</style>
