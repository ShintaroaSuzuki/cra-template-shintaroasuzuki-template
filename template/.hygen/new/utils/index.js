const fs = require('fs');

const features = fs
    .readdirSync('./src/features')
    .map((dir_name) => `src/features/${dir_name}/utils`);

module.exports = {
    prompt: ({ inquirer }) => {
        const questions = [
            {
                type: 'select',
                name: 'dir_name',
                message: 'どこに作成しますか？',
                choices: ['src/utils', ...features]
            },
            {
                type: 'input',
                name: 'function_name',
                message: '関数名を入力してください'
            }
        ];
        return inquirer.prompt(questions).then((answers) => {
            return answers;
        });
    }
};
