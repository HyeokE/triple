## preview


## 🛫 Getting Started

```bash
> git clone https://github.com/HyeokE/triple-project

> npm install

> vite
```

## 💾 Stack

### React + TS

타입스크립트는 올바르지 않은 타입에 대해 오류를 발생시키므로 사전에 버그를 방지합니다.

또한 IDE 내부에서 코드의 자동완성이나 피드백을 제공합니다.

### Styled-Component

CSS-in-JS를 사용함으로서 코드를 커스텀 컴포넌트 단위로 관리할 수 있으며 CSS 내부에서 JS 문법을 사용할 수 있습니다.

`globalStyle`로 CSS 초기화, `color asset`, `fontSize asset`을 지정함으로서 일관된 스타일을 제공할 수 있습니다.

### vite

번들러 기반의 도구의 경우 개발서버를 실행할 때 애플리케이션 내 모든 소스 코드에 대해 빌드 작업을 마쳐야 실제 페이지를 제공할 수 있습니다.
vit은 개발환경에서 ESbuild를 사용함으로서 기존 번들러 대비 10-100배 빠른 번들링 속도를 제공합니다.

### eslint

협업시 네이밍 규칙이나 코드의 일관성을 위해 lint 세팅을 하였습니다.

## 🏝 고민했던 점/ 발생한 이슈들

### 0. keyframe을 이용한 애니메이션이 유지되지 않는 문제
`opacitiy:0`에서 `opacity:1`로 마지막 애니메이션이 유지되지 않는 문제를 겪었어요.

-> `animation-fill-mode: forwards;`를 통해 해결했어요.

### 1. 숫자 증가 함수는 어떻게 구현할 수 있을까?

 FPS를 60이라고 가정하고 각 프레임당 걸리는 시간을 계산해서 setInterval로 구현하면 되겠다고 생각했어요.

>Reference: [easeOut](https://spicyyoghurt.com/tools/easing-functions) 함수

### 2. 숫자가 끝나는 시간이 전부 다른 이슈

>숫자 100은 종료시간이 `1300ms`, 숫자 720은 `2100 - 2200ms`으로 시간이 다르게 끝나는 이슈가 있었어요.

-> `toFixed(3)`로 소숫점 3자리를 남긴 후 `Math.floor()`로 원하는 값에 늦게 근접할 수 있도록 조정했어요.

>`Math.floor()`로 진행할 경우 목표한 숫자가 100이라고 했을 때 99에서 오래 머물게 되는 문제가 있었어요.

-> 지속시간이 2초가 넘어갈 경우 목표한 숫자를 할당하는 방법으로 해결했어요. 

[해당 commit](https://github.com/HyeokE/triple/commit/eac634ed6179e3f032ca28d9abe6f49018853412)

### 3. FPS가 고정되는 이슈

-> setInterval로 진행할 경우 사용자의 FPS를 60으로 가정하기 때문에 대안으로 RAF를 사용했어요.

> RAF의 콜백의 수는 보통 1초에 60회지만, 일반적으로 대부분의 브라우저에서는 W3C 권장사항에 따라 그 수가 디스플레이 주사율과 일치하게됩니다

Reference: [RAF](https://developer.mozilla.org/ko/docs/Web/API/Window/requestAnimationFrame)
