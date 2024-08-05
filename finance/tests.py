import requests

url = 'SOME URL'

headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36'}

from bs4 import BeautifulSoup

symbol = 'وکغدیر'
website = f'https://codal.ir/ReportList.aspx?search&Symbol={symbol}&LetterType=-1&AuditorRef=-1&PageNumber=1&Audited&NotAudited&IsNotAudited=false&Childs&Mains&Publisher=false&CompanyState=-1&Category=-1&CompanyType=-1&Consolidatable&NotConsolidatable'
response = requests.get(website, headers=headers)
html_doc = response.text
soup = BeautifulSoup(html_doc, 'html.parser')
tr = soup.find_all('tr', attrs={'class': 'table__row ng-scope'})
print()
