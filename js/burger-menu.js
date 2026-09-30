export const handleBurgerMenuClick = () => {
  const btnBurgerMenu = document.querySelector('.burger-menu');
  const navigation = document.querySelector('.nav');
  btnBurgerMenu.addEventListener('click', () => {
    navigation.classList.toggle('active');
  });
};