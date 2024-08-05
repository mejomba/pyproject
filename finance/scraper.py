from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By

from selenium.webdriver.chrome.service import Service as ChromeService
from webdriver_manager.chrome import ChromeDriverManager

driver = webdriver.Chrome(service=ChromeService(ChromeDriverManager().install()))
# driver = webdriver.Firefox()#Chrome(service=ChromeService(ChromeDriverManager().install()))
# from webdriver_manager.chrome import ChromeDriverManager
# driver = webdriver.Chrome(executable_path=ChromeDriverManager().install())


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
