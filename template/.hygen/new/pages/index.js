const fs = require('fs');

const models = fs.readdirSync('./src/features');

module.exports = {
    prompt: ({ inquirer }) => {
        const questions = [
            {
                type: 'select',
                name: 'feature',
                message:
                    'ディレクトリを選択してください（src/features/* のどこに作成しますか？）',
                choices: models
            },
            {
                type: 'input',
                name: 'page_name',
                message: 'ページ名を入力してください'
            }
        ];
        return inquirer.prompt(questions).then((answers) => {
            return answers;
        });
    }
};
