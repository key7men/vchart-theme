# @visactor/vchart-theme

## Description

The extension themes for [VChart](https://github.com/VisActor/VChart).

The list of themes included here is as follows, with links to the theme JSON files:

<!-- ThemeListBegin -->
<!-- 以下为自动生成 -->
- [light](https://raw.githubusercontent.com/VisActor/vchart-theme/main/packages/vchart-theme/public/light.json) 
- [dark](https://raw.githubusercontent.com/VisActor/vchart-theme/main/packages/vchart-theme/public/dark.json) 
- [mobileLight](https://raw.githubusercontent.com/VisActor/vchart-theme/main/packages/vchart-theme/public/mobileLight.json) light theme for mobile devices
- [mobileDark](https://raw.githubusercontent.com/VisActor/vchart-theme/main/packages/vchart-theme/public/mobileDark.json) dark theme for mobile devices
- [legacyLight](https://raw.githubusercontent.com/VisActor/vchart-theme/main/packages/vchart-theme/public/legacyLight.json) legacy light theme for simply legend style
- [legacyDark](https://raw.githubusercontent.com/VisActor/vchart-theme/main/packages/vchart-theme/public/legacyDark.json) legacy dark theme for simply legend style
- [vScreenVolcanoBlue](https://raw.githubusercontent.com/VisActor/vchart-theme/main/packages/vchart-theme/public/vScreenVolcanoBlue.json) 大屏-火山蓝
- [vScreenClean](https://raw.githubusercontent.com/VisActor/vchart-theme/main/packages/vchart-theme/public/vScreenClean.json) 大屏-清新蜡笔
- [vScreenOutskirts](https://raw.githubusercontent.com/VisActor/vchart-theme/main/packages/vchart-theme/public/vScreenOutskirts.json) 大屏-郊外
- [vScreenBlueOrange](https://raw.githubusercontent.com/VisActor/vchart-theme/main/packages/vchart-theme/public/vScreenBlueOrange.json) 大屏-汽车蓝橙
- [vScreenFinanceYellow](https://raw.githubusercontent.com/VisActor/vchart-theme/main/packages/vchart-theme/public/vScreenFinanceYellow.json) 大屏-金融黄
- [vScreenWenLvCyan](https://raw.githubusercontent.com/VisActor/vchart-theme/main/packages/vchart-theme/public/vScreenWenLvCyan.json) 大屏-文旅青
- [vScreenElectricGreen](https://raw.githubusercontent.com/VisActor/vchart-theme/main/packages/vchart-theme/public/vScreenElectricGreen.json) 大屏-电力绿
- [vScreenECommercePurple](https://raw.githubusercontent.com/VisActor/vchart-theme/main/packages/vchart-theme/public/vScreenECommercePurple.json) 大屏-电商紫
- [vScreenRedBlue](https://raw.githubusercontent.com/VisActor/vchart-theme/main/packages/vchart-theme/public/vScreenRedBlue.json) 大屏-红蓝
- [vScreenPartyRed](https://raw.githubusercontent.com/VisActor/vchart-theme/main/packages/vchart-theme/public/vScreenPartyRed.json) 大屏-党建红
- [semiDesignLight](https://raw.githubusercontent.com/VisActor/vchart-theme/main/packages/vchart-theme/public/semiDesignLight.json) Semi Design - light
- [semiDesignDark](https://raw.githubusercontent.com/VisActor/vchart-theme/main/packages/vchart-theme/public/semiDesignDark.json) Semi Design - dark
- [arcoDesignLight](https://raw.githubusercontent.com/VisActor/vchart-theme/main/packages/vchart-theme/public/arcoDesignLight.json) Arco Design - light
- [arcoDesignDark](https://raw.githubusercontent.com/VisActor/vchart-theme/main/packages/vchart-theme/public/arcoDesignDark.json) Arco Design - dark
<!-- 以上为自动生成 -->
<!-- ThemeListEnd -->

## Usage

Import the full theme map and register them in sequence:

```typescript
import { allThemeMap } from '@visactor/vchart-theme';
import VChart from '@visactor/vchart';

// register themes
allThemeMap.forEach((theme, name) => {
  VChart.ThemeManager.registerTheme(name, theme);
});

// apply a theme
VChart.ThemeManager.setCurrentTheme('vScreenVolcanoBlue');
```

If you only use a specific theme, you can also import the specific theme JSON from this package:

```typescript
import vScreenVolcanoBlue from '@visactor/vchart-theme/public/vScreenVolcanoBlue.json';
import VChart from '@visactor/vchart';

// register the theme
VChart.ThemeManager.registerTheme('vScreenVolcanoBlue', vScreenVolcanoBlue);

// apply the theme
VChart.ThemeManager.setCurrentTheme('vScreenVolcanoBlue');
```

## Debug

Run the following command from any location in the project to start the dev server:

```bash
rush theme
```
