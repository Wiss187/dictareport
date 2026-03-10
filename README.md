# Dictareport — Site vitrine dictareport.com

## Fichiers
- index.html → Accueil
- fonctionnalites.html → Fonctionnalités
- tarifs.html → Tarifs
- a-propos.html → À propos
- mentions-legales.html → Légal (RGPD, CGU, Cookies)
- style.css / main.js → Styles et scripts
- sitemap.xml / robots.txt → SEO

## Avant mise en ligne
1. **Mentions légales** : remplir [Nom société], [SIRET], [Adresse] dans mentions-legales.html
2. **Pixel Facebook** : décommenter le bloc `<!-- PIXEL FB -->` dans chaque .html et remplacer TON_PIXEL_ID
3. **Google Tag Manager** : décommenter le bloc `<!-- GTM -->` et remplacer GTM-XXXXXXX

## Déploiement GitHub Pages (gratuit)
1. Créer un dépôt GitHub public
2. Upload tous les fichiers
3. Settings → Pages → Deploy from branch main
4. Custom domain → dictareport.com
5. Enforce HTTPS ✓

## DNS chez votre registrar
```
A     @    185.199.108.153
A     @    185.199.109.153
A     @    185.199.110.153
A     @    185.199.111.153
CNAME www  votre-pseudo.github.io
```

## SEO après mise en ligne
- Soumettre https://dictareport.com/sitemap.xml dans Google Search Console
- Configurer Google Analytics via GTM
- Vérifier le Pixel FB dans Meta Events Manager
