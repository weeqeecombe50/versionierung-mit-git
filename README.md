# Versionierung mit Git

## Einführung
Dieses Projekt ist ein einfaches Werkzeug, welches Entwicklern hilft, ihre Versionshinweise im Git-Workflow zu verwalten. Es ermöglicht das Erstellen, Anzeigen und Verwalten von Release-Notizen direkt aus der Kommandozeile.

## Funktionen
- Erstellen von neuen Versionshinweisen
- Anzeigen der bisherigen Versionshinweise
- Exportieren von Versionshinweisen in Markdown- oder TXT-Dateien

## Installation
1. Klonen Sie dieses Repository:
   ```bash
   git clone https://github.com/benutzer/versionierung-mit-git.git
   ```
2. Wechseln Sie in das Verzeichnis:
   ```bash
   cd versionierung-mit-git
   ```
3. Installieren Sie die Abhängigkeiten:
   ```bash
   npm install
   ```

## Nutzung
Nachdem Sie das Tool installiert haben, können Sie mit folgendem Befehl neue Versionshinweise hinzufügen:
```bash
npm run add -- "Version 1.0.0: Erstveröffentlichung"
```
Um die bestehenden Versionshinweise anzuzeigen, verwenden Sie:
```bash
npm run list
```

## Lizenz
Dieses Projekt steht unter der MIT-Lizenz - siehe die [LICENSE](LICENSE) Datei für Details.
