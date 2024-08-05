from selenium import webdriver
from selenium.webdriver.common.by import By

from selenium.webdriver.chrome.service import Service as ChromeService
from webdriver_manager.chrome import ChromeDriverManager

# driver = webdriver.Chrome(service=ChromeService(ChromeDriverManager().install()))
# driver = webdriver.Firefox()#Chrome(service=ChromeService(ChromeDriverManager().install()))


import os
from django.conf import settings

USER_AGENT = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36"
WINDOW_SIZE = "1920x1080"


class Browser(webdriver.Chrome):
    timeout = 15

    def __init__(self):
        # Adds the executable folder to PATH so that chromedriver is available
        path_bin = str(settings.BASE_DIR / 'bin')
        if path_bin not in os.environ["PATH"]:
            os.environ["PATH"] += os.pathsep + path_bin

        # Customise Chrome options
        chrome_options = webdriver.ChromeOptions()

        # Allows you to launch Chrome without a window
        chrome_options.add_argument('--headless')

        # Google recommends this option
        chrome_options.add_argument("--no-sandbox")

        # Fixing issues with Docker memory
        chrome_options.add_argument("--disable-dev-shm-usage")

        # Allows you to customise the USER_AGENT
        chrome_options.add_argument(f"user-agent={USER_AGENT}")

        # Allows you to change the size of the window
        chrome_options.add_argument(f"window-size={WINDOW_SIZE}")

        super().__init__(chrome_options=chrome_options)

driver = Browser()


def scrap_codal(symbol):
    content = []
    website = f'https://codal.ir/ReportList.aspx?search&Symbol={symbol}&LetterType=-1&AuditorRef=-1&PageNumber=1&Audited&NotAudited&IsNotAudited=false&Childs&Mains&Publisher=false&CompanyState=-1&Category=-1&CompanyType=-1&Consolidatable&NotConsolidatable'
    driver.get(website)
    driver.minimize_window()
    elem = driver.find_element(By.CLASS_NAME, "scrollContent")
    link_elements = [x for x in elem.find_elements(By.TAG_NAME, 'tr')][:]
    try:
        for link in link_elements:
            content.append(link.get_attribute('innerHTML'))
    except Exception as e:
        print(e)
    finally:
        driver.close()
        return content
