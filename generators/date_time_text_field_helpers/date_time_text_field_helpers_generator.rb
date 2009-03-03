class DateTimeTextFieldHelpersGenerator < Rails::Generator::Base
  def manifest
    record do |m|
      m.directory('public/javascripts')
      m.file('date_time_field_autotab.js', 'public/javascripts/date_time_field_autotab.js')
    end
  end
end
