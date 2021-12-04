
![Logo](https://raw.githubusercontent.com/atah1r1/Capitcha_npm/master/logo.png)


# Capitcha component

🎉 A React js component to generate random captcha (digits & characters)




## Authors

- [@atah1r1](https://www.github.com/atah1r1)


## Features

- Choose the number of digits/characters
- You can customise it as you want
- Resizable
- Cross platform


## Installation

Install Capitcha with npm

```bash
  npm install capitcha-npm
```
    
## Usage/Examples

```javascript
import { Capitcha } from 'capitcha-npm';

function App() {
    const [value, setValue] = useState(null);

    return (
        <Capitcha setCaptchaText={setValue} /> // (setValue) the function that change the state of your value 
    );
}
```


## Documentation

[Documentation](https://github.com/atah1r1/Capitcha_npm)

| Props  | Description | Default Value |
| ------------- | ------------- | ------------- |
| setCaptchaText  | Return the value to your state (pass the function to update your state)  |  |
| captchaSize  | Captcha value size of characters  | 6 |
| defaultCaptchaText  | You can make a default value to your captcha. When you reload the captcha the value will be changed  | gh97dp |
| reloadBackground  | Reload button background color  | #494992 |
| captchaCustomClass  | Assign a custom className to captcha  |  |
| reloadColor  | Reload button color  | #FFFFFF |
| borderType  | Reload button border type  | dashed |
| borderColor  | Captcha border color  | #4DACF5 |
| backgroundColor  | Captcha background color  | #FFFFFF |
| iconWidth  | Reload button icon width  | 25 |
| iconHeight  | Reload button icon height  | 25 |
| reloadCustomClass  | Assign a custom  className to reload button |  |

## 🔗 Links
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/atah1r1)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/atah1r1)

