Set default namespace in a component to not specify it each time. Instead of this:
```jsx
const { t } = useTranslation()
<p>{t('namespace:translation-1')}</p>
<p>{t('namespace:translation-2')}</p>
```
do this:
```jsx
const { t } = useTranslation('namespace')
<p>{t('translation-1')}</p>
<p>{t('translation-2')}</p>
```

Source: https://github.com/aralroca/next-translate
