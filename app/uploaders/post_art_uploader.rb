class PostArtUploader < CarrierWave::Uploader::Base
  # Include RMagick or MiniMagick support:
  # include CarrierWave::RMagick
  # include CarrierWave::MiniMagick
  # include CarrierWave::MiniMagick
  # include CarrierWave::Video
  include CarrierWave::FFmpeg
  # # Choose what kind of storage to use for this uploader:
  # RESOLUTIONS = [
  #      { version: :p1080, resolution: '1920x1080'},
  #      { version: :p720, resolution: '1280x720'}
  #    ]
     if Rails.env.test?
       storage :file
 else
   storage :fog
 end
  # storage :fog
  # process encode_video: [:mp4, callbacks: { after_transcode: :set_success } ]

  # Override the directory where uploaded files will be stored.
  # This is a sensible default for uploaders that are meant to be mounted:
  def store_dir
    "uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}"
  end

      # process encode: [:mp4]

    #   def full_filename(for_file)
    #     super.chomp(File.extname(super)) + '.mp4'
    #   end
    # #
    # #   RESOLUTIONS.each do |resolution|
    # #     version resolution[:version], if: "bigger_than_#{resolution[:resolution]}?".to_sym
    # #
    # #     version resolution[:version] do
    # #       process encode: [:mp4, resolution: resolution[:resolution]]
    # #     end
    # #   end
    # # end


  # Process files as they are uploaded:
  # process scale: [200, 300]
  #
  # def scale(width, height)
  #   # do something
  # end

  # Create different versions of your uploaded files:
  # version :thumb do
  #   process resize_to_fit: [50, 50]
  # end

  # Add a white list of extensions which are allowed to be uploaded.
  # For images you might use something like this:
  # def extension_whitelist
  #   %w(jpg jpeg gif png)
  # end

  # Override the filename of the uploaded files:
  # Avoid using model.id or version_name here, see uploader/store.rb for details.
  # def filename
  #   "something.jpg" if original_filename
  # end
end
