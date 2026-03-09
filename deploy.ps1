[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
git init
git config user.name "Maheen Nouman"
git config user.email "imaheenwrites@gmail.com"
git add .
git commit -m "Update portfolio with SEO and image fixes"
git branch -M main
git remote add origin https://github.com/usamakswati/Portfolio-MaheensPalette.git
git remote set-url origin https://github.com/usamakswati/Portfolio-MaheensPalette.git
git push -f -u origin main
