### Hexlet tests and linter status:
[![Actions Status](https://github.com/AlexMaster001/backend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/AlexMaster001/backend-project-46/actions)

![Demo](https://asciinema.org/a/rGliUpTKXgFbaWNF9Kz8RxR2b )

[![asciicast](https://asciinema.org/a/F27UNgG1vSVSzIKHDGweVed4V.svg)](https://asciinema.org/a/F27UNgG1vSVSzIKHDGweVed4V)


[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=AlexMaster001_backend-project-46&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=AlexMaster001_backend-project-46)




# gendiff

Compares two configuration files and shows a difference.

[![Build Status](https://github.com/AlexMaster001/backend-project-46/actions/workflows/ci.yml/badge.svg )](https://github.com/AlexMaster001/backend-project-46/actions/workflows/ci.yml )

## Features

- Supports JSON format
- Stylish, plain, and JSON output formats
- CLI interface
- Automatic testing with Jest
- Linting with ESLint
- Continuous Integration with GitHub Actions
- Code quality analysis with SonarCloud

## Usage
Comparison of flat JSON files:
Command: gendiff __fixtures__/file1.json __fixtures__/file2.json
Format: json-json

Comparison of flat JSON and YAML files:
Command: gendiff __fixtures__/file1.json __fixtures__/file2.yml
Format: json-yml

Comparison of nested structure JSON and YAML files:
Command: gendiff __fixtures__/file3.json __fixtures__/file4.yaml
Format: json-yaml

Comparison of nested structure JSON and YAML files, plain format:
Command: gendiff --format plain __fixtures__/file3.json __fixtures__/file4.yaml
Format: json-yaml, plain

Comparison of nested structure JSON and YAML files, JSON format:
Command: gendiff --format json __fixtures__/file3.json __fixtures__/file4.yaml
Format: json-yaml, json