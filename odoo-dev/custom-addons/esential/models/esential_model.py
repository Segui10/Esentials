# -*- coding: utf-8 -*-
from odoo import models, fields, api


class Components(models.Model):
    _name = 'esential.task'
    _description = 'Esential Computers Components'

    name = fields.Char('Name', required=True)
    type = fields.Char('Type', required=True)
    marca = fields.Char('Marca', required=True)
    price = fields.Float('Price')
    description = fields.Text('Description', required=True)
    status = fields.Char('Status')
    date = fields.Date('Date')
    points = fields.Integer('Points', required=True)
    shop = fields.Integer('Shop', required=True)
    tested = fields.Boolean('Tested', default=False)
    offer = fields.Boolean('Offer', default=False)
    img = fields.Char('Imagen')
    active = fields.Boolean('Active', default=True)
    socket = fields.Char('Socket', default="1051")
    ddr = fields.Char('DDR', default="DDR3")

    @api.multi
    def do_toggle_done(self):
        for task in self:
            task.tested = not task.tested
        return True

    @api.multi
    def do_toggle_done_Offer(self):
        for task in self:
            task.offer = not task.offer
        return True

class Shops(models.Model):
    _name = 'esentials.task'
    _description = 'Esential Computers Shops'

    name = fields.Char('Name', required=True)
    lat = fields.Char('Latitude', required=True)
    lon = fields.Char('Longitude', required=True)

class UsersWeb(models.Model):
    _name = 'esentials.users'
    _description = 'Esential Computers users'

    name = fields.Char('Name', required=True)
    password = fields.Char('Password', required=True)
    email = fields.Char('Email', required=True)
    cart = fields.Char('Cart')

    @api.multi  
    def register(self,name,password,email):
        print "dentro"
        self.env['esentials.users'].create({'name':name,'pass':password,'emails':email})