 
  
   f u n c t i o n   l o a d N e w s T a b s ( )   {  
      
       v a r   f e e d C o n t r o l 2   =   n e w   g o o g l e . f e e d s . F e e d C o n t r o l ( ) ;  
       f e e d C o n t r o l 2 . a d d F e e d ( " h t t p : / / n e w s r s s . b b c . c o . u k / r s s / n e w s o n l i n e _ w o r l d _ e d i t i o n / t e c h n o l o g y / r s s . x m l " ,   " B B C   :   T e c h " ) ;  
       f e e d C o n t r o l 2 . a d d F e e d ( " h t t p : / / t o p i c s . c n n . c o m / t o p i c s / f e e d s / r s s / t e c h n o l o g y " ,   " C N N   T e c h " ) ;  
        
         f e e d C o n t r o l 2 . s e t L i n k T a r g e t ( g o o g l e . f e e d s . L I N K _ T A R G E T _ B L A N K ) ;  
 f e e d C o n t r o l 2 . s e t N u m E n t r i e s ( 6 ) ;  
       f e e d C o n t r o l 2 . d r a w ( d o c u m e n t . g e t E l e m e n t B y I d ( " t o p n e w s " ) ,  
                                                   { d r a w M o d e   :   g o o g l e . f e e d s . F e e d C o n t r o l . D R A W _ M O D E _ L I N E A R } ) ;  
    
       }  
          
  
   f u n c t i o n   l o a d N e w s T a b s 2 ( )   {  
      
       v a r   f e e d C o n t r o l 3   =   n e w   g o o g l e . f e e d s . F e e d C o n t r o l ( ) ;  
       f e e d C o n t r o l 3 . a d d F e e d ( " h t t p : / / n e w s . c n e t . c o m / 8 3 0 0 - 1 3 5 7 9 _ 3 - 3 7 . x m l " ,   " C N E T   A p p l e t   N e w s " ) ;  
       f e e d C o n t r o l 3 . s e t L i n k T a r g e t ( g o o g l e . f e e d s . L I N K _ T A R G E T _ B L A N K ) ;  
 f e e d C o n t r o l 3 . s e t N u m E n t r i e s ( 6 ) ;  
       f e e d C o n t r o l 3 . d r a w ( d o c u m e n t . g e t E l e m e n t B y I d ( " a p p l e n e w s " ) ,  
                                                   { d r a w M o d e   :   g o o g l e . f e e d s . F e e d C o n t r o l . D R A W _ M O D E _ L I N E A R } ) ;  
    
       }  
   