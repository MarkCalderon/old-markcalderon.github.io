import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const loadAOS = () => {
  AOS.init({
    duration: 2000,
    once: true,
  })
}
 
document.addEventListener('DOMContentLoaded', function() {
  loadAOS()
})