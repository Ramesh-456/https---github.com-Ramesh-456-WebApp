import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
// import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    toggleMode:boolean = false;
    router = inject(Router)
    profileMenu :MenuItem[]= [
        {
            label: 'Settings',
            icon: 'pi pi-cog',
            command:()=>this.showPopUp()
        },
        {
            label: 'Logout',
            icon: 'pi pi-sign-out',
            command:(event)=>{
                this.logout()
            }
        }
    ]
    logout(event?:any){
       localStorage.clear();
       this.router.navigate(['login'])
        
    }
    
    showPopUp(){
     
    }
  items:MenuItem[] = [
    {
        label: 'Home',
        icon: 'pi pi-home'
    },
    {
        label: 'Features',
        icon: 'pi pi-star'
    },
    {
        label: 'Products',
        icon: 'pi pi-star',
        items:[
            
                {
                    label: 'Add',
                    icon: 'pi pi-bolt',
                    shortcut: '⌘+S',
                    command: () => {
                        this.router.navigate(['/products/add/']);
                    }
                },
                {
                    label: 'View',
                    icon: 'pi pi-bolt',
                    shortcut: '⌘+S',
                    command: () => {
                        this.router.navigate(['/products/view/']);
                    }
                },
            
        ]
    },
    {
        label: 'Projects',
        icon: 'pi pi-search',
        items: [
            {
                label: 'Core',
                icon: 'pi pi-bolt',
                shortcut: '⌘+S'
            },
            {
                label: 'Blocks',
                icon: 'pi pi-server',
                shortcut: '⌘+B'
            },
            {
                label: 'UI Kit',
                icon: 'pi pi-pencil',
                shortcut: '⌘+U'
            },
            {
                separator: true
            },
            {
                label: 'Templates',
                icon: 'pi pi-palette',
                items: [
                    {
                        label: 'Apollo',
                        icon: 'pi pi-palette',
                        badge: '2',
                        command:()=>{
                            // this.getUser()
                        }
                    },
                    {
                        label: 'Ultima',
                        icon: 'pi pi-palette',
                        badge: '3'
                    }
                ]
            }
        ]
    },
    {
        label: 'Contact',
        icon: 'pi pi-envelope',
        badge: '3'
    }
];
toggle(){
   let link = document.getElementById('themes') as HTMLLinkElement
    this.toggleMode = !this.toggleMode;
    if(this.toggleMode){
        link.href='dark.css'
    }else{
link.href='light.css'
    }
}
getUser = (wl:any)=>{
    console.log(wl)
}
watchlist:any[] = [];
ngOnInit(){
    this.watchlist = [
        {
            watchlistId:'123'
        },
        {
            watchlistId:'456'
        }
    ]
    this.setButtons()
   
}
setButtons(){
    this.watchlist.forEach(each=>{
        each['menus'] = this.setConfigure(each);
    })
}
setConfigure(watchlist:any):MenuItem[]{
   return [
   
   
    {
        label: 'Projects',
        icon: 'pi pi-search',
        items: [
            {
                label: 'Core',
                icon: 'pi pi-bolt',
                shortcut: '⌘+S'
            },
            {
                label: 'Blocks',
                icon: 'pi pi-server',
                shortcut: '⌘+B'
            },
            {
                label: 'UI Kit',
                icon: 'pi pi-pencil',
                shortcut: '⌘+U'
            },
            {
                separator: true
            },
            {
                label: 'Templates',
                icon: 'pi pi-palette',
                items: [
                    {
                        label: 'Apollo',
                        icon: 'pi pi-palette',
                        badge: '2',
                        command:()=>{
                            this.getUser(watchlist)
                        }
                    }
                 
                ]
            }
        ]
    },
   
];
}
}


