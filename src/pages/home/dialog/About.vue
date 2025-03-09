<script setup>

</script>

<template>
  <div class="aboutme">
    <div>
      <Image src="/serene1004.png" alt="포트폴리오 프로필 이미지" width="160" class="aboutme-img"/>
      웹 퍼블리셔로 웹 개발을 시작하여 현재 프론트엔드 개발을 하고 있는 4년차 퍼블리셔/프론트엔드 개발자입니다.<br>
      이곳 저곳 마우스를 움직이며 클릭하고 스크롤을 하게 만드는 인터랙션이 가득한 사이트를 만드는 것을 좋아하며, 3D와 애니메이션 등에 관심이 많습니다.<br>
      현재 방송통신대학교 컴퓨터과학과에 재학중이며, 학업과 업무를 병행하고 있습니다.
    </div>

    <div class="contact-list">
      <div class="contact-item">
        <i class="pi pi-envelope"/>
        vcbxnzn@gmail.com
      </div>
      <div class="contact-item">
        <i class="pi pi-github"/>
        <a href="https://github.com/serene1004" target="_blank">https://github.com/serene1004</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.aboutme {
  min-width: 320px;
  width: 20vw;
  display: flex;
  flex-direction: column;
  gap: 0.5em;

  &-img {
    float: left;
    margin-right: 0.5em;
  }
}

.contact {
  &-list {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
  }

  &-item {
    display: inline-flex;
    align-items: center;
    gap: 0.5em;
  }
}

a {
  &:hover {
    color: var(--p-primary-color);
    text-decoration: underline;
    text-underline-position: under;
  }
}
</style>